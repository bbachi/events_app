import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { EventsAppMaterialModule } from '../app.material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event.component';
import { CreateEventVerifyComponent } from './create-event-verify.component';
import { CreateEventConfirmComponent } from './create-event-confirm.component';
import { CreateEventRoutingModule } from './create-event.routing.module'

@NgModule({
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EventsAppMaterialModule,
    SharedModule
  ],
  declarations: [CreateEventComponent, CreateEventVerifyComponent, CreateEventConfirmComponent]
})
export class CreateEventModule { }
