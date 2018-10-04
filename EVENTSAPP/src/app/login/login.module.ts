import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component'
import { EventsAppMaterialModule } from '../app.material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginEffects } from '../app-state/effects'


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EventsAppMaterialModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }