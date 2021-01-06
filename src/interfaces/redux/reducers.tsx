import { Action } from './actions';

export interface ResponseAction<T, U> extends Action<T>{
    data: U;
};

export interface Tag {
    _id: string;
    name: string;
    description: string;
    id:number;
};