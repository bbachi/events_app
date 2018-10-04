import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'src/app/login/login.module#LoginModule' },
  { path: 'dashboard', loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule' },
  { path: 'eventdetail', loadChildren: 'src/app/event-detail/event-detail.module#EventDetailModule' },
  { path: 'transactions', loadChildren: 'src/app/transactions/transactions.module#TransactionsModule' },
  { path: '**', loadChildren: 'src/app/login/login.module#LoginModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
