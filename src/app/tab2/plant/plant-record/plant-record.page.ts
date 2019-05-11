import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plant-record',
  templateUrl: './plant-record.page.html',
  styleUrls: ['./plant-record.page.scss'],
})
export class PlantRecordPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }
  clearRecord(){
    this.router.navigateByUrl('/tabs/tab2/plant');
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
            this.router.navigateByUrl('/tabs/tab2/plant');
          }
        }
        ]
    });

    await alert.present();
  }

}
