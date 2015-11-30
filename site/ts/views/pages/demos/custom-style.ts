/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { CustomStyleModel } from "../../../models/custom-style";

"use strict";

export class CustomStyleView extends Marionette.ItemView<CustomStyleModel> {

  public style: NineTails.Style;
  public rule: NineTails.Rule;

  public constructor(options: any) {
    super();
    this.rule = options.rule;
    this.style = new NineTails.Style();
    this.model.on("change:name", this._updateStyleName, this);
    this.model.on("change:value", this._updateStyleValue, this);
  }

  public onAttach() {
    /*this.el.querySelector(".custom-style-name").oninput = () => this.model.set("name", this.el.querySelector(".custom-style-name").value);
    this.el.querySelector(".custom-style-value").oninput = () => this.model.set("value", this.el.querySelector(".custom-style-value").value);*/
  }

  private _updateStyleName() {
    this.rule.linkStyle(this.model.get("name"), this.style);
  }

  private _updateStyleValue() {
    this.style._value = this.model.get("value");
  }

  public template(): string {
    return `
      <input type="text" class="custom-style-name" />
      <input type="text" class="custom-style-value" />
    `
  }
}
