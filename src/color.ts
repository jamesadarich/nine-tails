/// <reference path="./nine-tails.ts"/>
/// <reference path="./style.ts"/>
/// <reference path="./color-type.ts"/>

module NineTails {
   export class Color extends Style {
      red: number;
      green: number;
      blue: number;
      alpha: number;
      hue: number;
      saturation: number;
      lightness: number;

      public name: string;
      value: string;

      constructor(value: string, name?: string) {
         super();
         this.value = value;

         if (name) {
            this.name = name;
         }
         else {
            this.name = null;
         }
      }

      get() : string {
         return this.value;
      }

      set(value: string) : void {
         this.value = value;
         this.red = null;
         this.green = null;
         this.blue = null;
         this.alpha = null;
         this.hue = null;
         this.saturation = null;
         this.lightness = null;
         this.notifyHandlers();
      }

      setRgb(red : number, green : number, blue : number) : void {
         this.set(this.value = "rgb(" + red + ", " + green + "," + blue + ")");
         this.red = red;
         this.green = green;
         this.blue = blue;
      }

      setRgba(red : number, green : number, blue : number, alpha : number) : void {
         this.set(this.value = "rgba(" + red + ", " + green + "," + blue + ", "+ alpha + ")");
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.alpha = alpha;
      }

      setHsl(hue : number, saturation : number, lightness : number) : void {
         this.set(this.value = "hsl(" + hue + ", " + saturation + "%," + lightness + "%)");
         this.hue = hue;
         this.saturation = saturation;
         this.lightness = lightness;
      }

      setHsla(hue : number, saturation : number, lightness : number, alpha : number) : void {
         this.set(this.value = "hsla(" + hue + ", " + saturation + "%," + lightness + "%," + alpha + ")");
         this.hue = hue;
         this.saturation = saturation;
         this.lightness = lightness;
         this.alpha = alpha;
      }
   }
}
