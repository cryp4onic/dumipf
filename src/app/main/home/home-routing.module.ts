import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestComponent } from './latest/latest.component';
import { FeatureComponent } from './feature/feature.component';
import { PopularComponent } from './popular/popular.component';


const routes: Routes = [
  {
    path : '',
    component : LatestComponent
  },
  {
    path : 'feature',
    component : FeatureComponent
  },
  {
    path : 'popular',
    component : PopularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
