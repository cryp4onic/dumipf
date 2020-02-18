import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LatestComponent } from './latest/latest.component';
import { FeatureComponent } from './feature/feature.component';
import { PopularComponent } from './popular/popular.component';


@NgModule({
  declarations: [LatestComponent, FeatureComponent, PopularComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
