/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

"use strict";

export class AppShellView extends Marionette.LayoutView<Backbone.Model> {

   public constructor() {
      super();
      this.setElement(document.createElement("header"));
   }

   public template: () => string = () => `
      <button type="button" id="menu-button">
         <i class="fa fa-2x fa-bars"></i>
      </button>
      <h1>ninetails</h1>`;
}
