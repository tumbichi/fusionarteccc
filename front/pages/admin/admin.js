import { AdminContainerPages } from '../../layouts';
import UserListLayout from '../../containers/admin-user-list-layout';

const AdminPage = () => {
    return (
        <AdminContainerPages>
            <UserListLayout/>      
        </AdminContainerPages>
    )
}

export default AdminPage;