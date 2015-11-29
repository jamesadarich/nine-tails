/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

"use strict";

export class LengthSetView extends Marionette.LayoutView<Backbone.Model> {

  public color: NineTails.Color;
  public labelText: string;

  public constructor(labelText: string, length: NineTails.Size, selector: string, app: NineTailsSiteApp) {
    super();
    this.length = length;
    this.labelText = labelText;
    var rule = app.theme.createRule(selector);
    rule.linkStyle(labelText, length);
  }

  public onRender() {
    this.el.querySelector("label").innerHTML = this.labelText;
  }

  public onAttach() {
    this.el.querySelector("input").value = this.length.get();
    this.el.querySelector("input").oninput = () =>
      this.length.set(this.el.querySelector("input").value);
  }

  public template: () => string = () => `

     <div class="slider">
        <label></label>
        <input type="range" min="100" max="400"/>
     </div>`;
}
