import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedModules } from './shared-modules';
import { SharedComponents } from './shared-components';
import { SharedPipes } from './shared-pipes';

@NgModule({
  imports: [
    ...SharedModules,
    ...SharedComponents,
    ...SharedPipes
  ],
  exports: [
    ...SharedModules,
    ...SharedComponents,
    ...SharedPipes
  ],
  declarations: [
    ...SharedComponents,
    ...SharedPipes
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
