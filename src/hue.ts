/// <reference path="./nine-tails.ts"/>
///<reference path="color.ts"/>

module NineTails {
  export class Hue {

    color: Color;
    contrastColor: Color;

    constructor(color: Color, contrastColor?: Color) {
      this.color = color;
      this.contrastColor = contrastColor;

      if (contrastColor === undefined) {
        if ((this.color.red + this.color.green + this.color.blue) > 382) {
          //this.contrastColor = new Color(0, 0, 0, 1);
        }
        else {
          //this.contrastColor = new Color(255, 255, 255, 1);
        }
      }
    }
  }
}
