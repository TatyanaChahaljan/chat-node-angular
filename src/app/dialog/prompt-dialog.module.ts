import { NgModule } from '@angular/core';
import { PromptDialogComponent } from './prompt-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PromptDialogComponent],
  entryComponents: [PromptDialogComponent],
  imports: [
    MaterialModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class ConfirmDialogModule {
}
