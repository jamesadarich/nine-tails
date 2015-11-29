
namespace NineTails {
   export class BorderStyle extends Style {
      public type: BorderStyleType;

      constructor(type: BorderStyleType) {
         super();
         this.type = type;
      }

      get() : string {
         return BorderStyleType[this.type].toLowerCase();
      }

      set(type: BorderStyleType) : void {
         this.type = type;
         this.notifyHandlers();
      }
   }
}
