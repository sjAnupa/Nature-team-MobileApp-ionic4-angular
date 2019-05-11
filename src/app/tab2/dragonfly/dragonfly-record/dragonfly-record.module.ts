import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DragonflyRecordPage } from './dragonfly-record.page';

const routes: Routes = [
  {
    path: '',
    component: DragonflyRecordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DragonflyRecordPage]
})
export class DragonflyRecordPageModule {}
