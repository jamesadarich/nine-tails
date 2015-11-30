/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { LengthSetView } from "../../length-set";

"use strict";

export class ColorSectionView extends Marionette.LayoutView<Backbone.Model> {

  public left: NineTails.Size;
  public top: NineTails.Size;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#moving-example");
    //this.setElement(document.createElement("section"));
    this.left = new NineTails.Size(0, NineTails.SizeType.Percentage);
    rule.linkStyle("left", this.left);
    this.top = new NineTails.Size(0, NineTails.SizeType.Pixels);
    rule.linkStyle("top", this.top);
  }

  public onAttach(){
    this.el.querySelector("#position-x").value = parseInt(this.left.get());
    this.el.querySelector("#position-x").oninput =() => this.left.set(this.el.querySelector("#position-x").value);
    this.el.querySelector("#position-y").value = parseInt(this.top.get());
    this.el.querySelector("#position-y").oninput = () => this.top.set(this.el.querySelector("#position-y").value);
  }

  public template: () => string = () => `

  <h2>Color</h2>
  <h3>RGB</h3>
  <p>It's everyone's favourite color model and suprise! You can use it here</p>
  <div id="rgb-output">
     <div class="slider">
        <label>red</label>
        <input type="range" id="rgb-red" max="255" />
     </div>
     <div class="slider">
        <label>green</label>
        <input type="range" id="rgb-green" max="255" />
     </div>
     <div class="slider">
        <label>blue</label>
        <input type="range" id="rgb-blue" max="255" />
     </div>
  </div>
  <h3>HSL</h3>
  <p>You fancy pants hipsters wanna use some HSL? by all means!</p>
  <div id="hsl-output">
     <div class="slider">
        <label>hue</label>
        <input type="range" id="hsl-hue" max="360" />
     </div>
     <div class="slider">
        <label>saturation</label>
        <input type="range" id="hsl-saturation" max="100" />
     </div>
     <div class="slider">
        <label>lightness</label>
        <input type="range" id="hsl-lightness" max="100" value="50"/>
     </div>
  </div>
     <h3>Alpha</h3>
     <p>Want to see through the mess, just set that alpha!</p>
     <input type="range" id="alpha" step="0.01" max="1" value="1"/>
     <div id="alpha-container">
        <div id="hidden-text">Here I am</div>
        <div id="alpha-result"></div>
     </div>
<h3>Style your heart out</h3>
<p>Switch styles regularly? Want your users to change their style easily? Previews as you go? No problemo!</p>

<div id="color-name-result">
<input id="color-name" type="text" value="cyan" />
</div>
<h3>Change it very quickly</h3>
<p>That's no problem, let's rave!</p>
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
