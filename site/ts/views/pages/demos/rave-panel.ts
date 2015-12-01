/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

"use strict";

export class RaveColorPanelView extends Marionette.LayoutView<Backbone.Model> {

   public raveColors: any[] = [];
   public raveItemCount: number;

  public constructor(app: NineTailsSiteApp, raveColorCount: number, raveItemCount: number, updateFrequency: number) {
    super();

    this.raveItemCount = raveItemCount;

    for (var i = 1; i <= raveColorCount; i++) {

       var rapidChangeResult = app.theme.createRule(".rave-item-" + i);
       var rapidChangeColor = new NineTails.Color("rgb(0, 255, 0)");
       rapidChangeResult.linkStyle("background-color", rapidChangeColor);
       this.raveColors.push(rapidChangeColor);
    }

    setInterval(() => this._updateColors(), 200);
  }

  public onRender() {
     for(var i = 0; i < this.raveItemCount; i++ ){
       var raveItem = document.createElement("div");
       raveItem.className = "rave-item rave-item-" + Math.ceil(Math.random() * this.raveColors.length);
       this.el.appendChild(raveItem);
    }
  }

  _updateColors() {
    for(var i = 0; i < this.raveColors.length; i++) {
       this.raveColors[i].setRgb(Math.round(Math.random() * 255), Math.round(Math.random() * 255),Math.round(Math.random() * 255));
    }
 }

  public template = false;
}
