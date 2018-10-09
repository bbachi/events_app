import { Action } from '@ngrx/store';

export enum ActionTypes {
    VALIDATE_LOGIN = '[USER] Validate Login API',
    VALIDATE_LOGIN_SUCCESS = '[USER] Validate Login API Success',
    VALIDATE_LOGIN_FAILURE = '[USER] Validate Login API Failure',

    SIGNUP_USER = '[USER] Sign up user API',
    SIGNUP_USER_SUCCESS = '[USER] Sign up user API Success',
    SIGNUP_USER_FAILURE = '[USER] Sign up user API Failure',

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

export class SignupUser implements Action {
    readonly type = ActionTypes.SIGNUP_USER;
    constructor(public payload:any) {}
}

export class SignupUserSuccess implements Action {
    readonly type = ActionTypes.SIGNUP_USER_SUCCESS;
    constructor(public payload:any) {}
}

export class SignupUserFailure implements Action {
    readonly type = ActionTypes.SIGNUP_USER_FAILURE;
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
   | SignupUser
   | SignupUserSuccess
   | SignupUserFailure
   | Logout