
export class Style {
 public handlers: any;
 public _value: string;

 public constructor () {
   this.handlers = [];
 }

 public get(): string {
   return this._value;
 }

 protected setValue(value: string) {
   this._value = value;
   this._notifyHandlers();
 }

 private _notifyHandlers(): void {
   for (let i = 0; i < this.handlers.length; i++) {
     this.handlers[i].handler.call(this.handlers[i].context, { newValue: this.get() });
   }
 }

 public onSet(handler: any, context: any): void {
   this.handlers.push({ handler: handler, context: context });
 }
}
