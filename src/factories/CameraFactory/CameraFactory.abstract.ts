import { Camera } from "@/interfaces/Camera.interface";
export abstract class CameraFactory {

  public abstract createCamera(): Camera;
}