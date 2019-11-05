import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ChatService } from '../services/chat.service';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ChatComponent
  ],
  providers: [ChatService],
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
