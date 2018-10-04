import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SearchComponent } from './search/search.component'
import { EventsAppMaterialModule } from '../app.material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './events-list/event.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EventsAppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ DashboardComponent, SearchComponent, EventsListComponent, EventComponent ]
})
export class DashboardModule { }
