/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { fetchCategories } from './actions';
import { CategoryStatus } from './reducer';

const SelectCategory = ({ name, onChange, value }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ categories }) => ({
    data: categories.data,
    status: categories.status,
    selectedRole: categories.selected,
  }));

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  const options = data.map(({ id, descripcion }) => ({
    value: id,
    label: descripcion,
  }));

  return (
    <Dropdown
      name={name}
      placeholder="Categoria"
      loading={status === CategoryStatus.LOADING}
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={onChange}
    />
  );
};

export default SelectCategory;
