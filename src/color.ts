/// <reference path="./nine-tails.ts"/>
/// <reference path="./style.ts"/>
/// <reference path="./color-type.ts"/>

module NineTails {
   export class Color extends Style {
      red: number;
      green: number;
      blue: number;
      alpha: number;
      public name: string;
      colorName: string;
      type: ColorType;

      constructor(red: number, green: number, blue: number, alpha: number, name?: string) {
         super();
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.alpha = alpha;

         if (name) {
            this.name = name;
         }
         else {
            this.name = null;
         }

         this.type = ColorType.RGBA;
      }

      get() : string {
         if (this.type === ColorType.Name) {
            return this.colorName;
         }
         else if (this.type === ColorType.RGBA) {
            return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
         }

         return null;
      }

      setName(name: string): void {
         this.colorName = name;
         this.type = ColorType.Name;

         this.notifyHandlers();
      }

      set(red : number, green : number, blue : number, alpha: number) : void {
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.alpha = alpha;
         this.type = ColorType.RGBA;

         this.notifyHandlers();
      }
   }
}
