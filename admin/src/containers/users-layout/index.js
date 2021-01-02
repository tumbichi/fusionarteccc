/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserStatus } from './models/status';
import { fetchUsers, selectUser, unselectUser } from './actions';
import UserLayoutLoading from './components/user-layout-loading';
import UserLayoutSuccess from './components/user-layout-success';
import UserLayoutFailure from './components/user-layout-failure';
import UserLayoutDetails from './components/user-layout-details';

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
    console.log('editUser', user);
    dispatch(selectUser(user));
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
      return <UserLayoutLoading />;
    case UserStatus.SUCCESS:
      return (
        <UserLayoutSuccess
          data={data}
          loading={status === UserStatus.LOADING}
          onClickEdit={handleEditUser}
          onClickDelete={handleDeleteUser}
        />
      );
    case UserStatus.FAILURE:
      return <UserLayoutFailure />;
    case UserStatus.DETAILS:
      return (
        <UserLayoutDetails user={selectedUser} back={handleBackToDetails} />
      );
    default:
      return <></>;
  }
};

export default UsersLayout;
