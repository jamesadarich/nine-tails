/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/theme.ts"/>
///<reference path="../src/rule.ts"/>
///<reference path="../src/size.ts"/>
///<reference path="../src/size-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe("Theme", function() {
   describe("constructing a theme", function () {

      it("should create a style sheet element", function () {

         var theme = new NineTails.Theme();

         expect(theme.styleSheet).not.toBe(null);

         var styleElement = <HTMLElement>theme.styleSheet.ownerNode;
         expect(styleElement.nodeName).toBe("STYLE");
         expect(styleElement.className).toBe("nine-tails-theme");
         expect(styleElement.title).toBe("nine-tails");
         expect((<any>styleElement)["theme"]).toBe(theme);
      });
   });

   describe("creating a rule", function() {

      it("should create a rule with selector 'gotcha'", function () {
         var ruleSpy = spyOn(NineTails, "Rule");

         var theme = new NineTails.Theme();

         theme.createRule("gotcha");

         expect(ruleSpy.calls.mostRecent().args[0].selectorText).toBe("gotcha");
      });

   });
});
