import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router){

  }
  goToBird(){
      this.router.navigateByUrl('/tabs/tab2/bird');
  }
  goToButterfly(){
    this.router.navigateByUrl('/tabs/tab2/butterfly');
  }
  goToDragonfly(){
    this.router.navigateByUrl('/tabs/tab2/dragonfly');
  }
  goToPlant(){
    this.router.navigateByUrl('/tabs/tab2/plant');
  }
}
