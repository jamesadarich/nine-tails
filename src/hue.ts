///<reference path="color.ts"/>

module NineTails {
  export class Hue {

    color: Color;
    contrastColor: Color;

    constructor(color: Color, contrastColor?: Color) {
      this.color = color;
      this.contrastColor = contrastColor;

      if (color === undefined) {
        this.color = new Color(0, 0, 0);
      }

      if (contrastColor === undefined) {
        if ((this.color.red + this.color.green + this.color.blue) > 382) {
          this.contrastColor = new Color(0, 0, 0);
        }
        else {
          this.contrastColor = new Color(255, 255, 255);
        }
      }
    }
  }
}
