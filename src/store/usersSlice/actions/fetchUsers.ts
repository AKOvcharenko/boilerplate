import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINTS } from 'consts';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async ({ usersNumber }: { usersNumber: number }) => {
    try {
        const response = await axios.get(`${ENDPOINTS.USERS}?results=${usersNumber}`);
        const { data } = response;
        return data?.results ?? [];
    } catch (error) {
        return Promise.reject();
    }
});
