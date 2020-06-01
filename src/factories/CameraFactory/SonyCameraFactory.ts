import { CameraFactory } from "@/factories/CameraFactory/CameraFactory.abstract";
import { Camera } from "@/interfaces/Camera.interface";

import { SonyCamera } from "@/cameras/SonyCamera";

export class SonyCameraFactory implements CameraFactory {
  public createCamera(): Camera {
      return new SonyCamera();
  }
}