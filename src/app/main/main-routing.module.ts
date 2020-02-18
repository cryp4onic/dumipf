import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlankComponent } from '../layouts/blank/blank.component';
import { ContactComponent } from './contact/contact.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { HomeModule } from './home/home.module';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path : '404error',
    component : BlankComponent,
    children : [
      {
        path : '',
        component : Page404Component
      }
    ]
  },
  {
    path : '',
    component : DefaultComponent,
    children : [
      {
        path : 'about',
        component : AboutComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      },
      {
        path : '',
        component : HomeLayoutComponent,
        // loadChildren : './home/home.module#HomeModule'
        loadChildren: () => HomeModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
