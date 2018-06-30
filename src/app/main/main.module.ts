import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { BrowseModule } from '../browse/browse.module';
import { ExploreModule } from '../explore/explore.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    BrowseModule,
    ExploreModule,
    ProfileModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
