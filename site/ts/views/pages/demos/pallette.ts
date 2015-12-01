/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { HslColorSetView } from "../../hsl-color-set";

"use strict";

export class PalletteView extends Marionette.LayoutView<Backbone.Model> {

    public baseColorView: HslColorSetView;
    public baseColorSection: Marionette.Region;
    public baseColor: NineTails.Color;

  public constructor(baseColor: NineTails.Color, app: NineTailsSiteApp) {
    super();
    this.baseColor = baseColor;

    var baseColorRule = app.theme.createRule(".base-color");
    baseColorRule.linkStyle("background-color", this.baseColor);

    this.addRegion("baseColorSection", ".base-color");
    this.baseColorView = new HslColorSetView("base color", this.baseColor, ".base-color", app);
  }

  public onRender() {
    this.baseColorSection.show(this.baseColorView);
  }

  public template: () => string = () => `


     <div class="base-color">
        <input type="range" class="hue" max="360" />
        <input type="range" class="saturation" max="100" />
        <input type="range" class="lightness" max="100" />
     </div><div class="computed-colors">
        <label>Complimentary</label>
        <div class="complimentary-color"></div>
        <label>Split complimentary</label>
        <div class="split-complimentary-colors">
           <div class="split-complimentary-color-1"></div>
           <div class="main-color"></div>
           <div class="split-complimentary-color-2"></div>
        </div>
        <label>Triad</label>
        <div class="triad-colors">
           <div class="triad-color-1"></div>
           <div class="main-color"></div>
           <div class="triad-color-2"></div>
        </div>
        <label>Analagous</label>
        <div class="analagous-colors">
           <div class="analagous-color-1"></div>
           <div class="main-color"></div>
           <div class="analagous-color-2"></div>
        </div>
     </div>
  `;
}
