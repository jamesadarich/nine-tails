/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

"use strict";

import { ThemingSectionView } from "./theming-section";
import { SizeSectionView } from "./size-section";
import { SpacingSectionView } from "./spacing-section";

export class DemosPage extends Marionette.LayoutView<Backbone.Model> {

  public themingSection: Marionette.Region;
  public themingSectionView: ThemingSectionView;
    public sizeSection: Marionette.Region;
    public sizeSectionView: SizeSectionView;
      public spacingSection: Marionette.Region;
    public spacingSectionView: SpacingSectionView;

   public constructor(app: NineTailsSiteApp) {
      super();
      this.addRegion("themingSection", "#theming-section");
      this.addRegion("sizeSection", "#size-section");
      this.addRegion("spacingSection", "#spacing-section");
      this.themingSectionView = new ThemingSectionView(app);
      this.sizeSectionView = new SizeSectionView(app);
      this.spacingSectionView = new SpacingSectionView(app);
   }

   public onRender() {
     this.themingSection.show(this.themingSectionView);
     this.sizeSection.show(this.sizeSectionView);
     this.spacingSection.show(this.spacingSectionView);
   }

   public template: () => string = () => `
      <section id="theming-section"></section>
      <section id="size-section"></section>
      <section id="spacing-section"></section>`;
}
