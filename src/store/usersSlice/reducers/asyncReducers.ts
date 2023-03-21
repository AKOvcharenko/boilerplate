import { PayloadAction } from '@reduxjs/toolkit';
import { REQUEST_STATES } from '../../../consts'; // src folder should be set up as a root folder in webpack

import { UsersState, User } from '../model';

export const fetchUsersStart = (
    state: UsersState,
): UsersState => ({ ...state, loading: REQUEST_STATES.PENDING });

export const fetchUsersSuccess = (
    state: UsersState,
    action: any,
): UsersState => {
    return { ...state, loading: REQUEST_STATES.SUCCESS, users: action.payload }
};

export const fetchUsersFail = (
    state: UsersState,
): UsersState => ({ ...state, loading: REQUEST_STATES.FAILED });
