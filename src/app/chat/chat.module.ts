import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';

import { ChatComponent } from './chat.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  providers: [],
  exports: [ChatComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class ChatModule {
}
