import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  channels: Channel<DefaultStreamChatGenerics>[] = [];

  constructor(
    private router: Router, 
    private chatService: ChatService) { }  

  async ngOnInit() {
    this.channels = this.chatService.getChannels();
    console.log(this.channels);
  }

  openChannel(channel: Channel<DefaultStreamChatGenerics>) {
    this.router.navigate([`app/chat/conversation/${channel.id}`]);
  }

}

