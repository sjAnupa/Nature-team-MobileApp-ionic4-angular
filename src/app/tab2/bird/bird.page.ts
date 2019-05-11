import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bird',
  templateUrl: './bird.page.html',
  styleUrls: ['./bird.page.scss'],
})
export class BirdPage implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    
  }

  birdRecord(){
    this.router.navigateByUrl('/tabs/tab2/bird/bird-record');
  }
  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  

}
