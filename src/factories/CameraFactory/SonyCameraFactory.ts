import { CameraConfiguration } from "@/interfaces/CameraConfiguration.interface";
import { CameraFactory } from "@/factories/CameraFactory/CameraFactory.abstract";
import { Camera } from "../../interfaces/Camera.interface";

import { SonyCamera } from "../../cameras/SonyCamera";

export class SonyCameraFactory implements CameraFactory {
  public createCamera(): Camera {
    const cameraConfiguration: CameraConfiguration = {
      saturationDiff: 32,
      contrastDiff: 0,
      brightnessDiff: 17,
    };
    const fabricationDate: Date = new Date(); 
    return new SonyCamera( cameraConfiguration, fabricationDate);
  }
}