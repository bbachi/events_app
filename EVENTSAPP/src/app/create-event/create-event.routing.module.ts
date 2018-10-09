import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEventComponent }      from './create-event.component';
import { CreateEventVerifyComponent }      from './create-event-verify.component';
import { CreateEventConfirmComponent }      from './create-event-confirm.component';

const routes: Routes = [
  { path: 'create', component: CreateEventComponent },
  { path: 'verify', component: CreateEventVerifyComponent },
  { path: 'confirm', component: CreateEventConfirmComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CreateEventRoutingModule {}