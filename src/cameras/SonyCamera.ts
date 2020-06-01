import { Camera  } from "@/interfaces/Camera.interface";
import { Image } from "@/interfaces/Image.interface";
export class SonyCamera implements Camera { 
  public captureImage(): Image {
    const image = {
      name: "newSonyImage",
      content: "123456"
    };
    return image;
  }
}