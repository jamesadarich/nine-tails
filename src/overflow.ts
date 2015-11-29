import { Style } from "./style";
import { OverflowType} from "./overflow-type";

//namespace NineTails {
   export class Overflow extends Style {
      public type: OverflowType;

      constructor(type: OverflowType) {
         super();
         this.type = type;
      }

      get() : string {
         return OverflowType[this.type].toLowerCase();
      }

      set(type: OverflowType) : void {
         this.type = type;
         this.notifyHandlers();
      }
   }
//}
