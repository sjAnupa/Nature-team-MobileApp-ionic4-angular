import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-butterfly',
  templateUrl: './butterfly.page.html',
  styleUrls: ['./butterfly.page.scss'],
})
export class ButterflyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ButterflyRecord(){
    this.router.navigateByUrl('/tabs/tab2/butterfly/butterfly-record');
  }
  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

}
