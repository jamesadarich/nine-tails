/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

"use strict";

export class FreeTextColorSetView extends Marionette.LayoutView<Backbone.Model> {

     public color: NineTails.Color;

  public constructor(color: NineTails.Color, selector: string, app: NineTailsSiteApp) {
    super();
    this.color = color;
    var rule = app.theme.createRule(selector);
    rule.linkStyle("background-color", color);
  }

  public onAttach() {
    this.el.querySelector(".color-name").value = this.color.get();
    this.el.querySelector(".color-name").oninput = () => this._updateColor();
  }

  _updateColor() {
     this.color.set(this.el.querySelector(".color-name").value);
 }

  public template: () => string = () => `


  <input class="color-name" type="text" value="cyan" />`;
}
