import { Table, Button, Space } from 'antd';
import React, { FC, useCallback } from 'react';

import { useEffectOnce } from '../../../../hooks';
import { REQUEST_STATES } from '../../../../consts';
import { useReduxDispatch, useReduxSelector } from '../../../../store';
import { clearUsersAction, fetchUsers } from '../../../../store/usersSlice';

import { columns } from './columns';

const isLoading = (status: REQUEST_STATES) => status === REQUEST_STATES.PENDING;

export const UsersTable: FC = () => {
    const dispatch = useReduxDispatch();
    const { users, loading } = useReduxSelector((state) => state.usersSlice);
    const fetchUsersData = useCallback(() => dispatch(fetchUsers([]) as any), []);
    const clearUsersData = useCallback(() => dispatch(clearUsersAction()), []);

    useEffectOnce(fetchUsersData);

    const isLoadingUsers = isLoading(loading);
    return (<>
        <Space wrap={true} align='end' >
            <Button type="primary" loading={isLoadingUsers} onClick={fetchUsersData}>
                Fetch Users 
            </Button>
            <Button danger={true} onClick={clearUsersData}>Clear users info</Button>
        </Space>
        <Table
            columns={columns}
            rowKey={(record) => record.phone}
            dataSource={users}
            loading={isLoadingUsers}
        />
    </>    
    );
};