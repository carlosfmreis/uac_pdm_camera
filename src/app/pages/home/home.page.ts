import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  picture: string;

  constructor(
    private cameraService: CameraService,
    private alertController: AlertController
  ) {}

  takePicture(): void {
    this.cameraService
      .takePicture()
      .then((encodedImage) => {
        this.picture = 'data:image/jpeg;base64,' + encodedImage;
      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error,
        });
        await alert.present();
      });
  }
}
