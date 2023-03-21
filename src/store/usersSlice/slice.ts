import { createSlice } from '@reduxjs/toolkit';

import { REQUEST_STATES } from 'consts';

import {
    clearUsers,
    fetchUsersFail,
    fetchUsersStart,
    fetchUsersSuccess,
} from './reducers';
import { UsersState } from './model';
import { fetchUsers } from './actions';

const initialState: UsersState = {
    users: [],
    loading : REQUEST_STATES.NONE,
};

const usersState = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearUsers,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, fetchUsersStart);
        builder.addCase(fetchUsers.fulfilled, fetchUsersSuccess);
        builder.addCase(fetchUsers.rejected, fetchUsersFail);
    },
});

export const usersSlice = usersState.reducer;
export const {
    clearUsers: clearUsersAction,
} = usersState.actions;
