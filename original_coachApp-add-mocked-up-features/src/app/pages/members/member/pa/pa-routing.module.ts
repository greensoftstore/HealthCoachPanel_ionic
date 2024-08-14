import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaPage } from './pa.page';

const routes: Routes = [
  {
    path: '',
    component: PaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaPageRoutingModule {}
