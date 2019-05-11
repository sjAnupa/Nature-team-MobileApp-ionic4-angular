import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragonfly',
  templateUrl: './dragonfly.page.html',
  styleUrls: ['./dragonfly.page.scss'],
})
export class DragonflyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  DragonflyRecord(){
    this.router.navigateByUrl('/tabs/tab2/dragonfly/dragonfly-record');
  }
  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

}
