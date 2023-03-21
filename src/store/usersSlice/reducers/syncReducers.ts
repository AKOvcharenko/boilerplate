import { PayloadAction, CaseReducer } from '@reduxjs/toolkit';

import { User, UsersState } from '../model';

export const clearUsers: CaseReducer<UsersState> = (state) => {
    state = {
        ...state,
        users: [],
    };

    return state;
};
