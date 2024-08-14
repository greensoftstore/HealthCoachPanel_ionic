import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaPageRoutingModule } from './pa-routing.module';

import { PaPage } from './pa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaPageRoutingModule
  ],
  declarations: [PaPage]
})
export class PaPageModule {}
