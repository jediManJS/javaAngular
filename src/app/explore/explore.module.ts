import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent } from './explore.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ],
  declarations: [
    ExploreComponent
  ]
})
export class ExploreModule { }
