import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmDialogModule } from './dialog/prompt-dialog.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ConfirmDialogModule,
    ChatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
