import { REQUEST_STATES } from 'consts';

import { UsersState, User } from '../model';

export const fetchUsersStart = (
    state: UsersState,
): UsersState => ({ ...state, loading: REQUEST_STATES.PENDING });

export const fetchUsersSuccess = (
    state: UsersState,
    { payload }: { payload: User[] },
): UsersState => {
    return { ...state, loading: REQUEST_STATES.SUCCESS, users: payload }
};

export const fetchUsersFail = (
    state: UsersState,
): UsersState => ({ ...state, loading: REQUEST_STATES.FAILED });
