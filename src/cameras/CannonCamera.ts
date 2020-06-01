import { CameraConfiguration } from "../interfaces/CameraConfiguration.interface";
import { CameraTarget } from "../interfaces/CameraTarget.interface";
import { Camera } from "../interfaces/Camera.interface";
import { Image } from "../interfaces/Image.interface";

export class CannonCamera implements Camera {
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
    // We decided that Cannon does only modifies the contrast of the image
    const modifiedImage: Image = {
      ...rawImage,
      contrast: Math.min(Math.max(rawImage.contrast + this.cameraConfiguration.contrastDiff, 100) -100),
    };
    return modifiedImage;
  }
}
