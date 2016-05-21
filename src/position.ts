import { Style } from "./style";
import { PositionType } from "./position-type";

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

     this.setValue(this.get());
  }
}
