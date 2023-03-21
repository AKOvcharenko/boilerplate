import axios from 'axios';
import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { HEADERS } from 'consts';

export const setCustomAxiosHeader: Middleware =
    (_) => (next) => (action: PayloadAction<unknown>) => {
        // for this mock API it is not needed but maybe for real case...
        axios.defaults.headers.common[HEADERS.REQUIRED_CUSTOM_HEADER] = HEADERS.REQUIRED_CUSTOM_HEADER;

        return next(action);
    };
