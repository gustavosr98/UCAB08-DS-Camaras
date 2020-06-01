import { Image } from "../interfaces/Image.interface";

export interface CameraTarget {
  name: string;
  generateImage(): Image; 
};