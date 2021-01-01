import React, { useEffect, useState } from 'react';
import DataGrid from '../../components/DataGrid';
import { getAllUsers } from '../../services';

const UsersLayout = () => {
  const [status, setStatus] = useState({ data: [], loading: true });

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setStatus({ data, loading: false });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  return (
    <>
      <DataGrid title="Usuarios" data={status.data} loading={status.loading} />
    </>
  );
};

export default UsersLayout;
