import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionListComponent } from './transaction-history/list.component';
import { TransactionSearchComponent } from './transaction-history/search.component';
import { TransactionsRoutingModule } from './transactions.routing.module';
import { EventsAppMaterialModule } from '../app.material.module'
import { SharedModule } from '../shared/shared.module'
import { TransactionEffects } from '../app-state/effects'
import { TransactionService } from '../_services'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionsRoutingModule,
    EventsAppMaterialModule,
    SharedModule,
    EffectsModule.forRoot([TransactionEffects])
  ],
  declarations: [ TransactionHistoryComponent, TransactionListComponent, TransactionSearchComponent ],
  providers: [ TransactionService ],
})
export class TransactionsModule { }
