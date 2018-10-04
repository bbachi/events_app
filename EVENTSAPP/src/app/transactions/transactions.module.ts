import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionListComponent } from './transaction-history/list.component';
import { TransactionSearchComponent } from './transaction-history/search.component';
import { TransactionsRoutingModule } from './transactions.routing.module';
import { EventsAppMaterialModule } from '../app.material.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionsRoutingModule,
    EventsAppMaterialModule
  ],
  declarations: [ TransactionHistoryComponent, TransactionListComponent, TransactionSearchComponent ]
})
export class TransactionsModule { }
