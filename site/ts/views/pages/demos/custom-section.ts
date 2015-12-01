/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { CustomStyleListView } from "./custom-style-list";
import { CustomStyleModel } from "../../../models/custom-style";

"use strict";

export class CustomSectionView extends Marionette.LayoutView<Backbone.Model> {

  public customStyleListView: CustomStyleListView;
  public customStyleListContainer: Marionette.Region;
  public customStyles: Backbone.Collection;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#custom-example-result");
    this.customStyles = new Backbone.Collection<CustomStyleModel>();
    this.addRegion("customStyleListContainer", "#custom-styles");
    this.customStyleListView = new CustomStyleListView(this.customStyles, rule);
  }

  public onAttach() {
    this.customStyleListContainer.show(this.customStyleListView);
    this.el.querySelector("#add-custom-style").onclick = () => this.customStyles.add({});
  }

  public template: () => string = () => `


  <h2>Or anything else your heart desires...</h2>
  <p>If it's in css (and supported by your target browser(s)) then you can use NineTails.js to work with it</p>
  <div id="custom-example">
     <div id="custom-styles-panel">
        <div id="custom-styles">
        </div>
        <button type="button" id="add-custom-style">Add</button>
     </div>
     <div id="custom-container">
        <div id="custom-example-result"></div>
     </div>
     <div style="clear: both"></div>
  </div>`;
}
