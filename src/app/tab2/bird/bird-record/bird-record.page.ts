import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bird-record',
  templateUrl: './bird-record.page.html',
  styleUrls: ['./bird-record.page.scss'],
})
export class BirdRecordPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }


  ngOnInit() {
    
  }
  clearRecord(){
    this.router.navigateByUrl('/tabs/tab2/bird');
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
            this.router.navigateByUrl('/tabs/tab2/bird');
          }
        }
        ]
    });

    await alert.present();
  }

}
