import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from "rxjs";
import { takeUntil } from 'rxjs/operators'
import * as fromRoot from '../../app-state/reducers';
import * as transactionActions from '../../app-state/actions/transactions'

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  transactions$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
      this.getTransactions();

      this.transactions$ = this.store.select(fromRoot.getTransactions);
  }

  getTransactions(){
     this.store.dispatch(new transactionActions.ListTransactions({}));
  }

  search(event:any){
     console.log(event);
     this.getTransactions();
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
