import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberPage } from './member.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {
    path: ':memberId',
    component: MemberPage,
    children: [
      {
        path: 'summary',
        loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'pa',
        loadChildren: () => import('./pa/pa.module').then( m => m.PaPageModule)
      },
      {
        path: 'habits',
        loadChildren: () => import('./habits/habits.module').then( m => m.HabitsPageModule)
      },
      {
        path: 'care',
        loadChildren: () => import('./care/care.module').then( m => m.CarePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPageRoutingModule {}
