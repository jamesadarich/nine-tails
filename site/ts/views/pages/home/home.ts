/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

"use strict";

export class HomePage extends Marionette.LayoutView<Backbone.Model> {

   public constructor(app: NineTailsSiteApp) {
      super();
   }

   public onRender() {
   }

   public template: () => string = () => `
    <div id="showcase">Style it</div>`;
}
