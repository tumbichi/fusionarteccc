import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserListWrapper } from './styles';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import { suscribeToUser } from '../../services';
import { setUsers } from '../../store/actions/user.action';

const UserListLayout = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const data = [1, 2, 3, 4, 5];

  useEffect(() => {
    suscribeToUser((data) => {
      dispatch(setUsers(data));
    });
  }, []);

  console.log('users', users);
  return (
    <UserListWrapper height={'500px'} width={'500px'}>
      <List>
        {users.map((item) => {
          return <ListItem data={item} />;
        })}
      </List>
    </UserListWrapper>
  );
};

export default UserListLayout;
