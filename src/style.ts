module NineTails {
  export class Style {
    public handlers;

    public constructor () {
      this.handlers = [];
    }

    public get():string {
      return '';
    }

    public notifyHandlers(): void {
      for(var i = 0; i < this.handlers.length; i++) {
        this.handlers[i].handler.call(this.handlers[i].context, { newValue: this.get() }, this.handlers[i].extra);
      }
    }

    public onSet(handler, context, extra) : void {
      this.handlers.push({ handler: handler, context: context, extra: extra });
    }
  }
}
