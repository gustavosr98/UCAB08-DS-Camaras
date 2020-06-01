import { CameraFactory, SonyCameraFactory, CannonCameraFactory } from "./factories/CameraFactory";

console.log("MAIN HAS STARTED");

const sonyFactory: CameraFactory = new SonyCameraFactory();  
const cannonFactory: CameraFactory = new CannonCameraFactory();  