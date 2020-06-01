import { CameraTarget } from "../interfaces/CameraTarget.interface";
import { Image } from "../interfaces/Image.interface";
import { CameraConfiguration } from "../interfaces/CameraConfiguration.interface";
export interface Camera {
  // TS does not allows private attributes on interfaces
  cameraConfiguration: CameraConfiguration;
  fabricationDate: Date;

  captureImage(cameraTarget: CameraTarget): Image;  

  configureCamera(cameraConfiguration: CameraConfiguration): void;
}