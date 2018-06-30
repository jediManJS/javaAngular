import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthGuard } from '../app.guard';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'browse',
        loadChildren: '../browse/browse.module#BrowseModule',
        pathMatch: 'full',
        data: {
          viewName: 'browse',
          title: 'Browse Application'
        }
      },
      {
        path: 'explore',
        loadChildren: '../explore/explore.module#ExploreModule',
        pathMatch: 'full',
        data: {
          viewName: 'Explore',
          title: 'Explore Application'
        }
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfileModule',
        pathMatch: 'full',
        data: {
          viewName: 'Profile',
          title: 'User profile page'
        }
      }/*,
      {
        path: '',
        redirectTo: '/browse',
        pathMatch: 'full'
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)]
})
export class MainRoutingModule { }
