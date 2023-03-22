import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

import { usersSlice } from './usersSlice';
import { setCustomAxiosHeader } from './middlewares';

const rootReducer = combineReducers({
    usersSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware().concat(setCustomAxiosHeader),
    ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
