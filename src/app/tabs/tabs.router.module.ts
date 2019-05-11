import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab2/bird',
        children: [
          {
            path: '',
            loadChildren: '../tab2/bird/bird.module#BirdPageModule'
          }
        ]
      },
      {
        path: 'tab2/butterfly',
        children: [
          {
            path: '',
            loadChildren: '../tab2/butterfly/butterfly.module#ButterflyPageModule'
          }
        ]
      },
      {
        path: 'tab2/dragonfly',
        children: [
          {
            path: '',
            loadChildren: '../tab2/dragonfly/dragonfly.module#DragonflyPageModule'
          }
        ]
      },
      {
        path: 'tab2/plant',
        children: [
          {
            path: '',
            loadChildren: '../tab2/plant/plant.module#PlantPageModule'
          }
        ]
      },
      //
      {
        path: 'tab2/bird/bird-record',
        children: [
          {
            path: '',
            loadChildren: '../tab2/bird/bird-record/bird-record.module#BirdRecordPageModule'
          }
        ]
      },
      {
        path: 'tab2/butterfly/butterfly-record',
        children: [
          {
            path: '',
            loadChildren: '../tab2/butterfly/butterfly-record/butterfly-record.module#ButterflyRecordPageModule'
          }
        ]
      },
      {
        path: 'tab2/dragonfly/dragonfly-record',
        children: [
          {
            path: '',
            loadChildren: '../tab2/dragonfly/dragonfly-record/dragonfly-record.module#DragonflyRecordPageModule'
          }
        ]
      },
      {
        path: 'tab2/plant/plant-record',
        children: [
          {
            path: '',
            loadChildren: '../tab2/plant/plant-record/plant-record.module#PlantRecordPageModule'
          }
        ]
      },

      //
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
