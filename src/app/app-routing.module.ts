import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'bird', loadChildren: './tab2/bird/bird.module#BirdPageModule' },
  { path: 'butterfly', loadChildren: './tab2/butterfly/butterfly.module#ButterflyPageModule' },
  { path: 'dragonfly', loadChildren: './tab2/dragonfly/dragonfly.module#DragonflyPageModule' },
  { path: 'plant', loadChildren: './tab2/plant/plant.module#PlantPageModule' },
  { path: 'bird-record', loadChildren: './tab2/bird/bird-record/bird-record.module#BirdRecordPageModule' },
  { path: 'butterfly-record', loadChildren: './tab2/butterfly/butterfly-record/butterfly-record.module#ButterflyRecordPageModule' },
  { path: 'dragonfly-record', loadChildren: './tab2/dragonfly/dragonfly-record/dragonfly-record.module#DragonflyRecordPageModule' },
  { path: 'plant-record', loadChildren: './tab2/plant/plant-record/plant-record.module#PlantRecordPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
