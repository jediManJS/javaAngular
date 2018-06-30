import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './browse.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ],
  declarations: [
    BrowseComponent
  ]
})
export class BrowseModule { }
