import { CameraConfiguration } from "../../interfaces/CameraConfiguration.interface";
import { CameraFactory } from "../../factories/CameraFactory/CameraFactory.abstract";
import { Camera } from "../../interfaces/Camera.interface";

import { CannonCamera } from "../../cameras/CannonCamera";

export class CannonCameraFactory implements CameraFactory {
  public createCamera(): Camera {
    const cameraConfiguration: CameraConfiguration = {
      brightnessDiff: 0,
      contrastDiff: 34,
      saturationDiff: 0,
    };
    const fabricationDate: Date = new Date(); 
    return new CannonCamera( cameraConfiguration, fabricationDate);
  }
}