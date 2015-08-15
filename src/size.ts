///<reference path="./size-type.ts"/>
///<reference path="./style.ts"/>

module NineTails {
  export class Size extends Style {
      public value: number;
      public type: SizeType;

      constructor(value: number, type: SizeType) {
        super();
        this.value = value;
        this.type = type;
      }

      get() : string {
        if (this.type === SizeType.Pixels) {
          return this.value.toString() + 'px';
        }
        else if (this.type === SizeType.Percentage) {
          return this.value.toString() + '%';
        }
      }

      set(value: number, type?: number) : void {
        this.value = value;

        if (type != null) {
          this.type = type;
        }

        this.notifyHandlers();
      }
  }
}
