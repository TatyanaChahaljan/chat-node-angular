import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],

  exports: [
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
})
export class MaterialModule {
}
