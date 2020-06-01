import { Camera } from "@/interfaces/Camera.interface";
import { Image } from "@/interfaces/Image.interface";
export class CannonCamera implements Camera {
  public captureImage(): Image {
    const image = {
      name: "newCannonImage",
      content: "000000",
    };
    return image;
  }
}
