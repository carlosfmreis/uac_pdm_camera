import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private cameraOptions: CameraOptions;

  constructor(private cameraPlugin: Camera) {
    this.cameraOptions = {
      quality: 100,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE,
    };
  }

  takePicture(): Promise<any> {
    return this.cameraPlugin.getPicture(this.cameraOptions);
  }
}
