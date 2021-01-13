/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { fetchRoles } from './actions';
import { RoleStatus } from './reducer';

const SelectRole = ({ name, onChange, value }) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ roles }) => ({
    data: roles.data,
    status: roles.status,
    selectedRole: roles.selected,
  }));

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchRoles());
    }
  }, []);

  const options = data.map(({ id, descripcion }) => ({
    value: id,
    label: descripcion,
  }));

  return (
    <Dropdown
      name={name}
      placeholder="Rol"
      loading={status === RoleStatus.LOADING}
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={onChange}
    />
  );
};

export default SelectRole;
