/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

import { DemosPage } from "./pages/demos/demos";
import { ApiPage } from "./pages/api/api";
import { SiteMenu } from "./site-menu";

"use strict";

export class AppShellView extends Marionette.LayoutView<Backbone.Model> {

  private _pageSection: Marionette.Region;
  private _currentPage: Marionette.LayoutView<Backbone.Model>;
    private _siteMenu: Marionette.Region;
    private _menu: SiteMenu;
  private app: NineTailsSiteApp;

  public constructor(app: NineTailsSiteApp) {
    super();
    this.addRegion("_pageSection", "#page-section");
    this.addRegion("_siteMenu", "#menu");
    this._currentPage = new DemosPage(app);
    this._menu = new SiteMenu();
    this.app = app;
  }

  public onRender() {
    this.el.querySelector("#menu-button").onclick = () => this._menu.toggle();
    this._siteMenu.show(this._menu);
    this._pageSection.show(this._currentPage);
  }

  public showDemos() {
    this._currentPage = new DemosPage(this.app);
      this._pageSection.show(this._currentPage);
  }

  public showApi() {
    this._currentPage = new ApiPage(this.app);
      this._pageSection.show(this._currentPage);
  }

  public template: () => string = () => `
    <section id="menu"></section>
    <header id="site-header">
      <button type="button" id="menu-button">
        <i class="fa fa-2x fa-bars"></i>
      </button>
      <h1>ninetails</h1>
    </header>
    <section id="page-section"></section>`;
}