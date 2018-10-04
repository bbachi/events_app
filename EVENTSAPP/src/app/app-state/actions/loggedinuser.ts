import { Action } from '@ngrx/store';

export enum ActionTypes {
    VALIDATE_LOGIN = '[LOGIN] Validate Login API',
    VALIDATE_LOGIN_SUCCESS = '[LOGIN] Validate Login API Success',
    VALIDATE_LOGIN_FAILURE = '[LOGIN] Validate Login API Failure'
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

export type Actions =
   | ValidateLogin
   | ValidateLoginSuccess
   | ValidateLoginFailure