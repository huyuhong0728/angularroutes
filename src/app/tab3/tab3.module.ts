import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { HisPageModule } from './his/his.module';
import { HerPageModule } from './her/her.module';
const routes: Routes = [
  { path: '',
    component: Tab3Page,
    children: [
      {
        path: 'his',
        loadChildren: () => import('./his/his.module').then(m => m.HisPageModule)
      },
      {
        path: 'her',
        loadChildren: () => import('./her/her.module').then(m => m.HerPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('./her/her.module').then(m => m.HerPageModule)
          },
          {
            path: 'son',
            loadChildren: () => import('./her/son/son.module').then(m => m.SonPageModule)
          }
        ]
      }
    ] }
]
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
