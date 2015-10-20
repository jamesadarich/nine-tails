/// <reference path="./nine-tails.ts"/>
///<reference path="./position-type.ts"/>
///<reference path="./style.ts"/>

module NineTails {
   export class Position extends Style {
      public type: PositionType;

      constructor(type: PositionType) {
         super();
         this.type = type;
      }

      get() : string {
         return PositionType[this.type].toLowerCase();
      }

      set(type: PositionType) : void {
         this.type = type;
         this.notifyHandlers();
      }
   }
}
