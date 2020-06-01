import { ProPhotographer } from "./photographers/ProPhotographer";
import { CameraFactory, SonyCameraFactory, CannonCameraFactory } from "./factories/CameraFactory";

// INTERFACES
import { Photographer } from "./interfaces/Photographer.interface";
import { Camera } from "./interfaces/Camera.interface";
import { CameraTarget } from "./interfaces/CameraTarget.interface";
import { Image } from "./interfaces/Image.interface";
import { Beach } from "./cameraTargets/Beach/Beach";

// MAIN
console.log("MAIN HAS STARTED");

const sonyFactory: CameraFactory = new SonyCameraFactory();  
const cannonFactory: CameraFactory = new CannonCameraFactory();

const createdCameras: Camera[] = [
  sonyFactory.createCamera(),
  cannonFactory.createCamera(),
];

const juanPhotographer: Photographer = new ProPhotographer("Juan", createdCameras);

const cameraTarget: CameraTarget = new Beach();

const imagesTakenByJuan: Image[] = [
  juanPhotographer.takePhoto(cameraTarget),
  juanPhotographer.takePhoto(cameraTarget),
  juanPhotographer.takePhoto(cameraTarget)
];


console.log("MAIN HAS ENDED ");
