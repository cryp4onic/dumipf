import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlankComponent } from './blank/blank.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from '../navigation/navigation.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [DefaultComponent, BlankComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  exports : [
    DefaultComponent, BlankComponent
  ]
})
export class LayoutsModule { }
