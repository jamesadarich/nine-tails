

namespace NineTails {
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
