import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TasksPage } from './tasks.page';

import { TasksPageRoutingModule } from './tasks-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}



