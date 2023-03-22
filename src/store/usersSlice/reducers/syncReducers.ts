import { CaseReducer } from '@reduxjs/toolkit';

import { UsersState } from '../model';

export const clearUsers: CaseReducer<UsersState> = (state) => {
    state = {
        ...state,
        users: [],
    };

    return state;
};
