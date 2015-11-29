/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>
/// <amd-dependency path="ninetails" name="NineTails"/>

import { LengthSetView } from "../../length-set";

"use strict";

export class SizeSectionView extends Marionette.LayoutView<Backbone.Model> {


   public constructor(app: NineTailsSiteApp) {
      super();
      //this.setElement(document.createElement("section"));
      this.addRegion("heightSection", "#height-example");
      this.addRegion("widthSection", "#width-example");
      this.heightView = new LengthSetView("height", new NineTails.Size(200, NineTails.SizeType.Pixels), '#height-example', app);
      this.widthView = new LengthSetView("width", new NineTails.Size(200, NineTails.SizeType.Pixels), '#width-example', app);
   }

   public onRender(){
     this.heightSection.show(this.heightView);
       this.widthSection.show(this.widthView);
   }

   public heightView: HslColorSetView;
  public widthView: HslColorSetView;
   public heightSection: Marionette.Region;
   public widthSection: Marionette.Region;

   public template: () => string = () => `

   <h2>Size</h2>
   <p>Things too big or too small - no problemo</p>
   <div id="width-example"></div>
   <div id="height-example"></div>`;
}
