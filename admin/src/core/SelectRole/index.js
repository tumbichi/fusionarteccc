/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { fetchRoles, selectRole } from './actions';
import { RoleStatus } from './reducer';

const SelectRole = () => {
  const dispatch = useDispatch();
  const { options, selectedRole, status } = useSelector(({ roles }) => ({
    options: roles.options,
    status: roles.status,
    selectedRole: roles.selected,
  }));

  useEffect(() => {
    dispatch(fetchRoles());
  }, []);

  const handleRoleChange = (option) => {
    dispatch(selectRole(option));
  };

  console.log('options', options, status);
  return (
    <Dropdown
      name="role"
      placeholder="Rol"
      loading={status === RoleStatus.LOADING}
      options={options.map(({ id, descripcion }) => ({
        value: id,
        label: descripcion,
      }))}
      value={selectedRole}
      onChange={handleRoleChange}
    />
  );
};

export default SelectRole;
