import { CameraConfiguration } from "../interfaces/CameraConfiguration.interface";
import { CameraTarget } from "../interfaces/CameraTarget.interface";
import { Camera } from "../interfaces/Camera.interface";
import { Image } from "../interfaces/Image.interface";

export class SonyCamera implements Camera {
  constructor(cameraConfiguration: CameraConfiguration, fabricationDate: Date){
    this.cameraConfiguration = cameraConfiguration;
    this.fabricationDate = fabricationDate;
  }

  cameraConfiguration: CameraConfiguration;
  fabricationDate: Date;

  public configureCamera(cameraConfiguration: CameraConfiguration){
    this.cameraConfiguration = cameraConfiguration;
  }

  public captureImage(cameraTarget: CameraTarget): Image {
    const rawImage: Image = cameraTarget.generateImage();
    const modifiedImage: Image = this.modifyRawImage(rawImage); 
    return modifiedImage;
  }

  private modifyRawImage(rawImage: Image): Image {
    // We decided that Sony does not modifies the contrast of the image
    const modifiedImage: Image = {
      ...rawImage,
      brightness: Math.min(Math.max(rawImage.brightness + this.cameraConfiguration.brightnessDiff, 100) -100),
      saturation: Math.min(Math.max(rawImage.saturation + this.cameraConfiguration.saturationDiff, 100) -100),
    };
    return modifiedImage;
  }
}
