import { Image } from "../interfaces/Image.interface";
import { CameraTarget } from "../interfaces/CameraTarget.interface";
import { Camera } from "../interfaces/Camera.interface";
export interface Photographer {
  name: string;
  cameras: Camera[];

  takePhoto(cameraToUse: Camera, cameraTarget: CameraTarget): Image;
}
