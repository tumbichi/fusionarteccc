import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTable from '../../components/DataTable';
import HeaderTable from '../../components/HeaderTable';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import { suscribeToUser } from '../../services'
import { setUsers } from '../../store/actions/user.action';
import { BodyTable } from './styles';
import { UserTable } from '../../models';
import DataGrid from '../../components/DataGrid';

const UserListLayout = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        suscribeToUser((data) => {
            dispatch(setUsers(data));
        })
    }, []);

    console.log('users', users)

    const renderHeader = () => {
        return <HeaderTable columns={Object.keys(new UserTable('', '', '', '', ''))} />;
    }

    const renderBody = () => {
        return <BodyTable>
            <List>
                {users.map(user => <ListItem value={user} columns={Object.keys(new UserTable('', '', '', '', ''))} />)}
            </List>
        </BodyTable>;
    }
    
    return (
        <DataGrid />
    )
}

export default UserListLayout
