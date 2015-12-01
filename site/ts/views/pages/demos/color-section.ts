/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { HslColorSetView } from "../../hsl-color-set";
import { RgbColorSetView } from "../../rgb-color-set";
import { AlphaColorSetView } from "../../alpha-color-set";
import { FreeTextColorSetView } from "../../free-text-color-set";
import { RaveColorPanelView } from "./rave-panel";

"use strict";

export class ColorSectionView extends Marionette.LayoutView<Backbone.Model> {

  public hslExampleView: HslColorSetView;
  public hslExampleSection: Marionette.Region;
    public rgbExampleView: RgbColorSetView;
    public rgbExampleSection: Marionette.Region;
      public alphaExampleView: AlphaColorSetView;
      public alphaExampleSection: Marionette.Region;
        public colorNameExampleView: FreeTextColorSetView;
        public colorNameExampleSection: Marionette.Region;
         public ravePanelExampleView: RaveColorPanelView;
         public ravePanelExampleSection: Marionette.Region;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#moving-example");
    //this.setElement(document.createElement("section"));
    var rgbColor = new NineTails.Color("");
    rgbColor.setRgb(255, 50, 50);
    this.rgbExampleView = new RgbColorSetView("", rgbColor, "#rgb-output", app);

    this.addRegion("rgbExampleSection", "#rgb-output");

    var hslColor = new NineTails.Color("");
    hslColor.setHsl(0, 50, 50);
    this.hslExampleView = new HslColorSetView("", hslColor, "#hsl-output", app);

    this.addRegion("hslExampleSection", "#hsl-output");

    var alphaColor = new NineTails.Color("");
    alphaColor.setRgba(0, 0, 0, 1.0);
    this.alphaExampleView = new AlphaColorSetView(alphaColor, "#alpha-example", app);

    this.addRegion("alphaExampleSection", "#alpha-example");

    var namedColor = new NineTails.Color("");
    namedColor.set("cyan");
    this.colorNameExampleView = new FreeTextColorSetView(namedColor, "#color-name-result", app);

    this.addRegion("colorNameExampleSection", "#color-name-result");

    this.ravePanelExampleView = new RaveColorPanelView(app, 100, 1196, 200);
        this.addRegion("ravePanelExampleSection", "#rave-panel");
  }

  public onAttach(){
     this.hslExampleSection.show(this.hslExampleView);
        this.rgbExampleSection.show(this.rgbExampleView);
          this.alphaExampleSection.show(this.alphaExampleView);
            this.colorNameExampleSection.show(this.colorNameExampleView);
             this.ravePanelExampleSection.show(this.ravePanelExampleView);
  }

  public template: () => string = () => `

  <h2>Color</h2>
  <h3>RGB</h3>
  <p>It"s everyone"s favourite color model and suprise! You can use it here</p>
  <div id="rgb-output"></div>
  <h3>HSL</h3>
  <p>You fancy pants hipsters wanna use some HSL? by all means!</p>
  <div id="hsl-output">
  </div>
     <h3>Alpha</h3>
     <p>Want to see through the mess, just set that alpha!</p>
     <div id="alpha-example"></div>
<h3>Style your heart out</h3>
<p>Switch styles regularly? Want your users to change their style easily? Previews as you go? No problemo!</p>
<div id="color-name-result"></div>
<h3>Change it very quickly</h3>
<p>That"s no problem, let's rave!</p>
<div id="rave-panel"></div>
<div id="pallettes">
 <h3>Pallettes</h3>
 <div class="pallette">
    <div class="main-color">
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
 </div>
</div>`;
}
