/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatus } from './models/status';
import { changeInput, fetchUsers, selectUser, unselectUser } from './actions';
import { fetchRoles } from '../../core/SelectRole/actions';
import {
  UsersLayoutLoading,
  UsersLayoutSuccess,
  UsersLayoutFailure,
  UsersLayoutDetails,
  UsersLayoutEdit,
} from './components';

const UsersLayout = () => {
  const dispatch = useDispatch();
  const { status, data, selectedUser, roles, formData } = useSelector(
    (state) => {
      return {
        status: state.users.status,
        data: state.users.data,
        selectedUser: state.users.selected,
        roles: state.roles.data,
        formData: state.users.form,
      };
    }
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleEditUser = (user) => {
    dispatch(selectUser({ user, status: UserStatus.EDIT }));
  };

  const handleDetailsUser = (user) => {
    dispatch(selectUser({ user, status: UserStatus.DETAILS }));
  };

  const handleDeleteUser = (user) => {
    console.log('deleteUser', user);
  };

  const handleBackToDetails = () => {
    dispatch(unselectUser());
  };

  const handleInputChange = (name, value) => {
    dispatch(changeInput(name, value));
  };

  const handleSelectChange = ({ value }, { name }) => {
    dispatch(changeInput(name, value));
  };

  const handleRequestRoles = () => {
    dispatch(fetchRoles());
  };

  // eslint-disable-next-line default-case
  switch (status) {
    case UserStatus.LOADING:
      return <UsersLayoutLoading />;
    case UserStatus.SUCCESS:
      return (
        <UsersLayoutSuccess
          data={data}
          onClickEdit={handleEditUser}
          onClickDelete={handleDeleteUser}
          onClickDetails={handleDetailsUser}
        />
      );
    case UserStatus.FAILURE:
      return <UsersLayoutFailure />;
    case UserStatus.EDIT:
      return (
        <UsersLayoutEdit
          user={selectedUser}
          formData={formData}
          roles={roles}
          back={handleBackToDetails}
          onChangeInput={handleInputChange}
          onChangeDropdown={handleSelectChange}
        />
      );
    case UserStatus.DETAILS:
      return (
        <UsersLayoutDetails
          user={selectedUser}
          roles={roles}
          requestRoles={handleRequestRoles}
          back={handleBackToDetails}
        />
      );
    default:
      return <></>;
  }
};

export default UsersLayout;
