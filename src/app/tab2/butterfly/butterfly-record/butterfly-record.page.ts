import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-butterfly-record',
  templateUrl: './butterfly-record.page.html',
  styleUrls: ['./butterfly-record.page.scss'],
})
export class ButterflyRecordPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }
  clearRecord(){
    this.router.navigateByUrl('/tabs/tab2/butterfly');
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
            this.router.navigateByUrl('/tabs/tab2/butterfly');
          }
        }
        ]
    });

    await alert.present();
  }

}
