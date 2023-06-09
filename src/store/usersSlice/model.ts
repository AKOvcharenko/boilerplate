import { REQUEST_STATES } from 'consts';

export type User = {
    gender: 'male' | 'female';
    name: {
        title: 'Mr' | 'Mrs' | 'Miss';
        first: string;
        last: string;
    };
    email: string;
    userName: string;
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    picture: {
        large: string;
        thumbnail: string;
        medium: string;
    }

}

export type UsersState = {
    users: User[];
    loading: REQUEST_STATES,
};