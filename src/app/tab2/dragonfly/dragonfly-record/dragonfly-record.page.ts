import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dragonfly-record',
  templateUrl: './dragonfly-record.page.html',
  styleUrls: ['./dragonfly-record.page.scss'],
})
export class DragonflyRecordPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  clearRecord(){
    this.router.navigateByUrl('/tabs/tab2/dragonfly');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // header: 'Dis',
      message: 'Discard your changes.',
      buttons: [
        {
          text: 'Cancel',        
        },
        {
          text: 'Confirm',
          handler: () => {
            this.router.navigateByUrl('/tabs/tab2/dragonfly');
          }
        }
        ]
    });

    await alert.present();
  }

}

