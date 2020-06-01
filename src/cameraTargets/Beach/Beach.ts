import { Image } from "../../interfaces/Image.interface";
import { CameraTarget } from "../../interfaces/CameraTarget.interface";

const POSIBLE_NAMES: string[] = [
  "JAVIER_SWIMMING_WITH_SHARKS",
  "GUSTAVO_DRINKING_RUM_ON_THE_ROCKS",
  "YEISSON_TANNING_ON_BIKINI"
];

export class Beach implements CameraTarget {
  name = "The Beach";
  public generateImage(): Image {
    const imageName: string = this.randomOf(POSIBLE_NAMES); 

    const image: Image = {
      name: imageName,
      content: imageName + ".jpeg",
      saturation: this.random(),
      contrast: this.random(),
      brightness: this.random(),
    };
    
    return image;
  };

  private randomOf(array: string[]): string {
    return array[ Math.floor( Math.random()*array.length ) ];
  };
  
  private random(): number {
    const value: number = Math.floor( Math.random()*100 );
    const direction: number = Math.random();
    if (direction > 0.5)
      return  value;
    else 
      return -1*value;
  };
}