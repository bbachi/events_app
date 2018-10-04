import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app.routing.module';

import { EventsAppMaterialModule } from './app.material.module';
import { LoginService, BaseService } from './_services';

//Feature Modules
import { SharedModule } from './shared/shared.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { LoginModule } from './login/login.module'

//state related imports
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from "./app-state/reducers";
import { CustomRouterStateSerializer } from './app-state/shared/utils';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EventsAppMaterialModule,  //should always import after BrowserAnimationsModule
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    LoginModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
    * @ngrx/router-store keeps router state up-to-date in the store.
    */
    StoreRouterConnectingModule,
  ],
  providers: [ LoginService, BaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
