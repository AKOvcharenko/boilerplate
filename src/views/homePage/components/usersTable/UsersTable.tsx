import { Table, Button, Space } from 'antd';
import React, { FC, useCallback } from 'react';

import { useEffectOnce } from 'hooks';
import { REQUEST_STATES } from 'consts';
import { useAppDispatch, useAppSelector } from 'store';
import { clearUsersAction, fetchUsers } from 'store/usersSlice';

import { columns } from './columns';
import styles from './UsersTable.module.css';

const isLoading = (status: REQUEST_STATES) => status === REQUEST_STATES.PENDING;

export const UsersTable: FC = () => {
    const dispatch = useAppDispatch();
    const { users, loading } = useAppSelector(({ usersSlice }) => usersSlice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUsersData = useCallback(() => { dispatch(fetchUsers({ usersNumber: 10 })) }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const clearUsersData = useCallback(() => { dispatch(clearUsersAction()) }, []);

    useEffectOnce(fetchUsersData);

    const isLoadingUsers = isLoading(loading);
    return (<>
        <div className={styles.userTableButtons}>
            <Space>
                <Button type="primary" loading={isLoadingUsers} onClick={fetchUsersData}>
                    Fetch Users 
                </Button>
                <Button danger={true} onClick={clearUsersData}>Clear users info</Button>
            </Space>
        </div>          
        <Table
            columns={columns}
            pagination={false}
            dataSource={users}
            loading={isLoadingUsers}
            rowKey={(record) => record.phone}
        />
    </>    
    );
};