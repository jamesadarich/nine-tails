import { Style } from "./style";
import { SizeType } from "./size-type";

export class Size extends Style {
    public value: number;
    public type: SizeType;

    constructor(value: number, type: SizeType) {
      super();
      this.value = value;
      this.type = type;
    }

    get() : string {
      if (this.type === SizeType.Percentage) {
        return this.value.toString() + '%';
      }
      else {
        return this.value.toString() + 'px';
      }
    }

    set(value: number, type?: SizeType) : void {
      this.value = value;

      if (type !== undefined) {
        this.type = type;
      }

      this.setValue(this.get());
    }
  }
