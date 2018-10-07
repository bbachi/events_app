import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Observable, of as observableOf } from 'rxjs';
import { TransactionService } from '../../_services';
import * as transactionActions from '../actions/transactions';

@Injectable()
export class TransactionEffects {

  constructor(private action$: Actions, private transactionService: TransactionService) { }


  @Effect()
  listTransactionEffects$ = this.action$.pipe(
    ofType<transactionActions.ListTransactions>(
        transactionActions.ActionTypes.LIST_TRANSACTIONS
    ),
    startWith(new transactionActions.ListTransactions({})),
    switchMap(action => 
        this.transactionService.listTransactions(action.payload).pipe(
          map(data => new transactionActions.ListTransactionsSuccess(data)),
          catchError(error =>
            observableOf(new transactionActions.ListTransactionsFailure({ error }))
          )
        )
    )
  )
}