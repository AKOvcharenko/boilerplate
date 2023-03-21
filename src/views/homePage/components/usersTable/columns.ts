import type { ColumnsType } from 'antd/es/table';

import { User } from 'store/usersSlice/model';

export const columns: ColumnsType<User> = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];