import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { MatDialog } from '@angular/material';
import { PromptDialogComponent } from '../dialog/prompt-dialog.component';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SocketData {
  type: string;
  data: any;
}

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})

export class ChatComponent implements OnInit, OnDestroy {
  public message;
  public userName;
  public messages: string[] = [];
  public connects = [];
  public subscriptions: Subscription[] = [];
  public color: string = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  public messageForm: FormGroup = this.fb.group({
    message: ['', [Validators.required]],
  });

  constructor(
    private chatService: ChatService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
  }

  sendMessage() {
    this.chatService.sendMessage({
      message: this.messageForm.get('message').value,
      user: this.userName,
      color: this.color
    });
    this.messageForm.reset();
  }

  ngOnInit() {
    this.showModal();
    this.subscriptions.push(
      this.chatService.userDisconnect().subscribe((socketData: SocketData) => {
        if (!socketData) {
          return;
        }
        const {type, data} = socketData;
        this.connects.push({type, name: `${data.name}`});
      }),

      this.chatService.getMessages().subscribe((socketData: SocketData) => {
          const {data} = socketData;
          this.messages.push(data);
        }
      ),

      this.chatService.getUser().subscribe((socketData: SocketData) => {
          if (!socketData) {
            return;
          }
          const {data, type} = socketData;
          this.connects.push({type, name: `${data.name}`});
        }
      ),
    );
  }

  showModal() {
    const dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((data: string) => {
      this.userName = data || 'guest';
      this.chatService.userConnect(this.userName);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
