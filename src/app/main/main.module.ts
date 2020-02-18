import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AboutComponent, ContactComponent, HomeLayoutComponent, Page404Component],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutsModule
  ]
})
export class MainModule { }