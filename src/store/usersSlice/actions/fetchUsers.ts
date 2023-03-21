import axios from 'axios';
import { createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

import { ENDPOINTS } from 'consts';

import { User } from '../model';

export const fetchUsers = createAsyncThunk<
    AnyAction,
    undefined
>('users/fetchUsers', async () => {
    try {
        const response = await axios.get(`${ENDPOINTS.USERS}?results=10`); // this query param should be taken as func argument
        const { data } = response;
        return data?.results ?? [];
    } catch (error) {
        return Promise.reject();
    }
});
