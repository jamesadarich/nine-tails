
//namespace NineTails {
  export class Style {
    public handlers: any;
    public _value: string;

    public constructor () {
      this.handlers = [];
    }

    public get():string {
      return this._value;
    }

    public notifyHandlers(): void {
      for(var i = 0; i < this.handlers.length; i++) {
        this.handlers[i].handler.call(this.handlers[i].context, { newValue: this.get() }, this.handlers[i].extras);
      }
    }

    public onSet(handler: any, context: any, extras: any) : void {
      this.handlers.push({ handler: handler, context: context, extras: extras });
    }
  }
//}
