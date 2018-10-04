import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail.component';
import { EventDetailRoutingModule } from './event-detail.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventDetailRoutingModule
  ],
  declarations: [ EventDetailComponent ]
})
export class EventDetailModule { }
