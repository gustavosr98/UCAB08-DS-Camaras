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
const juanPhotographer: Photographer = new ProPhotographer("Juan", [sonnyCamera, cannonCamera]);
const cameraTarget: CameraTarget = new Beach();

const sonnyCamera: Camera = sonyFactory.createCamera();
const cannonCamera: Camera =  cannonFactory.createCamera();

const firstPhoto: Image = juanPhotographer.takePhoto(sonnyCamera, cameraTarget);
const secondPhoto: Image = juanPhotographer.takePhoto(cannonCamera, cameraTarget);

console.log("MAIN HAS ENDED ");
