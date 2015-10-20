/// <reference path="./nine-tails.ts"/>

module NineTails {
  export class Style {
    public handlers: any;

    public constructor () {
      this.handlers = [];
    }

    public get():string {
      return '';
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
}
