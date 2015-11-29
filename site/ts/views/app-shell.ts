/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

import { DemosPage } from "./pages/demos";

"use strict";

export class AppShellView extends Marionette.LayoutView<Backbone.Model> {

  private _pageSection: Marionette.Region;
  private _currentPage: Marionette.LayoutView<Backbone.Model>;

  public constructor() {
    super();
    this.addRegion("_pageSection", "#page-section");
    this._currentPage = new DemosPage();
  }

  public onRender() {
    this._pageSection.show(this._currentPage);
  }

  public template: () => string = () => `
    <header>
      <button type="button" id="menu-button">
        <i class="fa fa-2x fa-bars"></i>
      </button>
      <h1>ninetails</h1>
    </header>
    <section id="page-section"></section>`;
}
