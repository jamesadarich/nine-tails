/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

import { NineTailsSiteApp } from "./app";

"use strict";

export class NineTailsRouter extends Marionette.AppRouter {

   public constructor(app: NineTailsSiteApp) {
      super({ routes: {}, appRoutes: {"*path": "showHome"},  controller: app });
   }
}
