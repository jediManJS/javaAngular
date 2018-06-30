import { NgModule } from '@angular/core';

import {
  MatMenuModule,
  MatTabsModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class MaterialModule { }
