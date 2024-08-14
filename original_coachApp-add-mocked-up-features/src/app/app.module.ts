import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"development-35385",
        "appId":"1:971378351719:web:263d9d6613e6e8b0997ec2",
        "storageBucket":"development-35385.appspot.comm",
        "apiKey":"AIzaSyBmcZqVJBfJ0NgCI_W2G8pOBbWpdVfMvJs",
        "authDomain":"development-35385.firebaseapp.com",
        "messagingSenderId":"971378351719",
        "measurementId":"G-LPE32V2BP1"
      }
    )), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
