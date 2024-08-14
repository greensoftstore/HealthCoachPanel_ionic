import { Injectable } from '@angular/core';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private userId: string;
  
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
    ) {
    const apiKey = "388wybtafpws";
    this.userId = "maxime_coach";
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibWF4aW1lX2NvYWNoIn0.CATOdldelVOaCQsxyZBSxWtww774RP_dI_GkowaRsIA";
    this.chatService.init(apiKey, this.userId, userToken);
    this.streamI18nService.setTranslation();
    
  }

  initChannel() {
    this.channelService.init({
      type: "messaging",
      members: { $in: [this.userId] },
    });
  }

  getChannels() {
    return this.channelService.channels;
  }

}