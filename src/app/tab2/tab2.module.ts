import { YouComponentComponent } from './you-component/you-component.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
const routes: Routes = [
  { path: '', component: Tab2Page,
  children: [
    {
      path: 'my',
      component: MyComponentComponent
    },
    {
      path: 'you',
      component: YouComponentComponent
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
  declarations: [Tab2Page, MyComponentComponent,
    YouComponentComponent]
})
export class Tab2PageModule {}
