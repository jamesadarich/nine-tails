/// <reference path="./style.ts"/>

module NineTails {
   export class Color extends Style {
      red: number;
      green: number;
      blue: number;
      alpha: number;
      public name: string;

      constructor(red: number, green: number, blue: number, alpha: number, name?: string) {
         super();
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.alpha = alpha;
         this.name = name;
      }

      get() : string {
         return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
      }

      set(red : number, green : number, blue : number, alpha: number) : void {
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.alpha = alpha;
         this.notifyHandlers();
      }
   }
}
