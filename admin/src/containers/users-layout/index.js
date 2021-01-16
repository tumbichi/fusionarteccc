/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatus } from './models/status';
import {
  changeInput,
  fetchUsers,
  requestEditUser,
  selectUser,
  unselectUser,
} from './actions';
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
  const { status, data, selectedUser, roles, formData, saving } = useSelector(
    (state) => {
      return {
        status: state.users.status,
        data: state.users.data,
        selectedUser: state.users.selected,
        roles: state.roles.data,
        formData: state.users.form,
        saving: state.users.saving,
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

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    dispatch(changeInput(name, value));
  };

  const handleDropdownChange = ({ value }, { name }) => {
    dispatch(changeInput(name, value));
  };

  const handleRequestRoles = () => {
    dispatch(fetchRoles());
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(requestEditUser(selectedUser.id, formData));
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
          back={handleBackToDetails}
          formData={formData}
          onChangeDropdown={handleDropdownChange}
          onChangeInput={handleInputChange}
          onSubmit={handleEditSubmit}
          roles={roles}
          saving={saving}
          user={selectedUser}
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
