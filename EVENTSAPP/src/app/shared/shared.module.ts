import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsAppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './progress/loading.component';

@NgModule({
  imports: [
    CommonModule,
    EventsAppMaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
