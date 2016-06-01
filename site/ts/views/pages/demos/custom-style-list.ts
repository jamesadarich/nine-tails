/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

import { CustomStyleView } from "./custom-style";

"use strict";

export class CustomStyleListView extends Marionette.CollectionView<Backbone.Model, CustomStyleView> {

  public constructor(collection: Backbone.Collection<Backbone.Model>, rule: NineTails.Rule) {
    super({
      collection: collection,
      childView: CustomStyleView,
      childViewOptions: () => { return { rule: rule } }
    });
  }
}
