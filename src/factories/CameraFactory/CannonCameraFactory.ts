import { CameraFactory } from "@/factories/CameraFactory/CameraFactory.abstract";
import { Camera } from "@/interfaces/Camera.interface";

import { CannonCamera } from "@/cameras/CannonCamera";

export class CannonCameraFactory implements CameraFactory {
  public createCamera(): Camera {
      return new CannonCamera();
  }
}