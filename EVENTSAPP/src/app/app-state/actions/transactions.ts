import { Action } from '@ngrx/store';

export enum ActionTypes {
    LIST_TRANSACTIONS = '[TRANSACTIONS] List Transactions API',
    LIST_TRANSACTIONS_SUCCESS = '[TRANSACTIONS] List Transactions API Success',
    LIST_TRANSACTIONS_FAILURE = '[TRANSACTIONS] List Transactions API Failure',
}

export class ListTransactions implements Action {
    readonly type = ActionTypes.LIST_TRANSACTIONS;
    constructor(public payload:any) {}
}

export class ListTransactionsSuccess implements Action {
    readonly type = ActionTypes.LIST_TRANSACTIONS_SUCCESS;
    constructor(public payload:any) {}
}

export class ListTransactionsFailure implements Action {
    readonly type = ActionTypes.LIST_TRANSACTIONS_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | ListTransactions
   | ListTransactionsSuccess
   | ListTransactionsFailure