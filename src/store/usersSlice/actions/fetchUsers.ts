import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINTS } from '../../../consts'; // src folder should be set up as a root folder in webpack

import { User } from '../model';

export const fetchUsers = createAsyncThunk<
    Promise<null>,
    User[]
>('users/fetchUsers', async () => {
    try {
        const response = await axios.get(`${ENDPOINTS.USERS}?results=10`); // this query param should be taken as func argument
        const { data } = response;
        return data?.results ?? [];
    } catch (error) {
        return Promise.reject();
    }
});
