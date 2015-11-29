/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

"use strict";

export class ApiPage extends Marionette.LayoutView<Backbone.Model> {

   public constructor(app: NineTailsSiteApp) {
      super();
   }

   public onRender() {
   }

   public template: () => string = () => `
      <h1>API</h1>
      <p>Here's how you do it</p>
      <h2>Style</h2>
      <b>set<i>(value:string)</i></b> - sets the style to the that you gave it,
      this will cascade to all listening rules!`;
}
