/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatus } from './models/status';
import { fetchUsers, selectUser, unselectUser } from './actions';
import {
  UsersLayoutLoading,
  UsersLayoutSuccess,
  UsersLayoutFailure,
  UsersLayoutDetails,
  UsersLayoutEdit,
} from './components';

const UsersLayout = () => {
  const dispatch = useDispatch();
  const { status, data, selectedUser } = useSelector(({ users }) => ({
    status: users.status,
    data: users.data,
    selectedUser: users.selected,
  }));

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
      return <UsersLayoutEdit user={selectedUser} back={handleBackToDetails} />;
    case UserStatus.DETAILS:
      return (
        <UsersLayoutDetails user={selectedUser} back={handleBackToDetails} />
      );
    default:
      return <></>;
  }
};

export default UsersLayout;
