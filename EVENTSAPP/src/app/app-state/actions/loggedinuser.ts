import { Action } from '@ngrx/store';

export enum ActionTypes {
    VALIDATE_LOGIN = '[LOGGED IN USER] Validate Login API',
    VALIDATE_LOGIN_SUCCESS = '[LOGGED IN USER] Validate Login API Success',
    VALIDATE_LOGIN_FAILURE = '[LOGGED IN USER] Validate Login API Failure',

    LOGOUT = '[LOGGED IN USER] Logout'
}

export class ValidateLogin implements Action {
    readonly type = ActionTypes.VALIDATE_LOGIN;
    constructor(public payload:any) {}
}

export class ValidateLoginSuccess implements Action {
    readonly type = ActionTypes.VALIDATE_LOGIN_SUCCESS;
    constructor(public payload:any) {}
}

export class ValidateLoginFailure implements Action {
    readonly type = ActionTypes.VALIDATE_LOGIN_FAILURE;
    constructor(public payload:any) {}
}

export class Logout implements Action {
    readonly type = ActionTypes.LOGOUT;
    constructor(public payload:any) {}
}

export type Actions =
   | ValidateLogin
   | ValidateLoginSuccess
   | ValidateLoginFailure
   | Logout