export interface Action<T> {
    type: T;
};

export interface RequestAction<T> extends Action<T>{
    url: String;
    requestApi:Boolean;
};

export interface RequestPostPutAction<T> extends RequestAction<T> {
    body: any;
    method: string;
};