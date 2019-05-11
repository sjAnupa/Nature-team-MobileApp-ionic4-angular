import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  PlantRecord(){
    this.router.navigateByUrl('/tabs/tab2/plant/plant-record');
  }
  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }
  

}
