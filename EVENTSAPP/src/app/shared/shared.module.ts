import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsAppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './progress/loading.component';
import { LoginbuttonDirective, SignupbuttonDirective } from '../_directives'

@NgModule({
  imports: [
    CommonModule,
    EventsAppMaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    LoginbuttonDirective,
    SignupbuttonDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    LoginbuttonDirective,
    SignupbuttonDirective
  ]
})
export class SharedModule { }
