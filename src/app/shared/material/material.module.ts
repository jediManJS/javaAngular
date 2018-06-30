import { NgModule } from '@angular/core';

import {
  MatMenuModule,
  MatTabsModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule
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
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
