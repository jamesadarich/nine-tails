/// <reference path="../../../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../../../typings/underscore/underscore.d.ts"/>
/// <reference path="../../../../../typings/backbone/backbone.d.ts"/>
/// <reference path="../../../../../typings/marionette/marionette.d.ts"/>
/// <amd-dependency path="marionette" name="Marionette"/>

"use strict";

export class ApiPage extends Marionette.LayoutView<Backbone.Model> {

   public constructor(app: NineTailsSiteApp) {
      super();
   }

   public template: () => string = () => `
    <section>
      <h2>Style</h2>
      <h3>Functions</h3>
      <p>
      <b>set<i>(value:string)</i></b> - sets the style to the that you gave it,
      this will cascade to all listening rules!
      </p>
      <p>
      <b>get<i>() value:string</i></b> - sets the style to the that you gave it,
      this will cascade to all listening rules!
      </p>
      <p>
      <b>on<i>(event:string, callback:Function, context:any)</i></b> - sets the style to the that you gave it,
      this will cascade to all listening rules!
      </p>
      <p>
      <b>trigger<i>(event:string, eventInfo:any)</i></b> - sets the style to the that you gave it,
      this will cascade to all listening rules!
      </p>
      <h3>Events</h3>
      <p>
      <b>change</b>
      </p>
      <p>
      <b>invalid</b>
      </p>
      </section>
       <section>
       <h2>Rule</h2>
       <p>
       <b>linkStyle<i>(styleName:string, style: NineTails.Style)</i></b> - sets the style to the that you gave it,
       this will cascade to all listening rules!
       </p>
       <p>
       <b>on<i>(event:string, callback:Function, context:any)</i></b> - sets the style to the that you gave it,
       this will cascade to all listening rules!
       </p>
       <p>
       <b>trigger<i>(event:string, eventInfo:any)</i></b> - sets the style to the that you gave it,
       this will cascade to all listening rules!
       </p>
       </section>
        <section>
        <h2>Theme</h2>
        <p>
        <b>createRule<i>(selector:string)</i></b> - sets the style to the that you gave it,
        this will cascade to all listening rules!
        </p>
        </section>`;
}
