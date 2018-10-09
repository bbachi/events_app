import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginRoutingModule } from './login.routing.module';
import { SharedModule } from '../shared/shared.module'
import { LoginComponent } from './login.component'
import { EventsAppMaterialModule } from '../app.material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginEffects } from '../app-state/effects'
import { ToLowerCasePipe, NOwhiteSpacePipe, CamelcasePipe } from '../_pipes';
import { SignupComponent } from './signup.component';
import { LandingComponent } from './landing.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EventsAppMaterialModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  declarations: [ LoginComponent, ToLowerCasePipe, NOwhiteSpacePipe, CamelcasePipe, SignupComponent, LandingComponent ],
  providers: [ ToLowerCasePipe, NOwhiteSpacePipe, CamelcasePipe ]
})
export class LoginModule { }