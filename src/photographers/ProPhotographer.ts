import { Image } from "../interfaces/Image.interface";
import { CameraTarget } from "../interfaces/CameraTarget.interface";
import { Camera } from "../interfaces/Camera.interface";
import { Photographer } from "../interfaces/Photographer.interface";

export class ProPhotographer implements Photographer {
  constructor(name: string, cameras: Camera[]){
    console.log(`My name is ${name} and I am a Pro Photographer!`);
    this.name = name;
    this.cameras = cameras;
  }
  name: string;
  cameras: Camera[];

  takePhoto(cameraToUse: Camera, cameraTarget: CameraTarget): Image {
    const camera = this.cameras.find(c => c === cameraToUse) || cameraToUse;
    const capturedImage = camera.captureImage(cameraTarget);
    
    console.log(`It's me ${this.name}. I just took a photo of ${capturedImage.name}`);
    console.log(`    | brightness: ${capturedImage.brightness}`);
    console.log(`    | contrast:   ${capturedImage.contrast}`);
    console.log(`    | saturation: ${capturedImage.saturation}`);
    console.log("");

    return capturedImage;
  };
}
