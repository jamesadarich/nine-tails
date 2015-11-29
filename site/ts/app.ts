/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { NineTailsRouter } from "./router";
import { AppShellView } from "./views/app-shell";

"use strict";

export class NineTailsSiteApp extends Marionette.Application {

   public router: NineTailsRouter;

   public constructor() {
      super();

      this.addRegions({
         appContainer: "#nine-tails-site-app"
      });
      this.on("start", this._start, this);

      this._createTheme();
   }

   private _createTheme(): void {


      var theme = new NineTails.Theme();
      var ruleOne = theme.createRule("header");
      var primaryColor = new NineTails.Color("rgb(255, 0, 0)");
      ruleOne.linkStyle("background-color", primaryColor);
   }

   private _start(): void {
      this.router = new NineTailsRouter(this);
      if (Backbone.history) {
         Backbone.history.start();
      };

      (<any>window).mango = this;
   }

   public showHome(): void {
      this.getRegion("appContainer").show(new AppShellView());
   }
}
