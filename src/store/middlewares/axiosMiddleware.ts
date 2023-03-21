import axios from 'axios';
import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { HEADERS } from '../../consts'; // src folder should be set up as a root folder in webpack

export const setCustomAxiosHeader: Middleware =
    (_) => (next) => (action: PayloadAction<unknown>) => {
        axios.defaults.headers.common[HEADERS.REQUIRED_CUSTOM_HEADER] = HEADERS.REQUIRED_CUSTOM_HEADER;

        return next(action);
    };
