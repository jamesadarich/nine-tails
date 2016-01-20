///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { Rule } from "../src/rule";
import { Style } from "../src/style";

describe("Rule", function() {
   describe("linking a style to the Rule", function () {
      it("should handle the set event of the style", function () {

         var styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         var styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         var rule = new Rule(<CSSStyleRule>styleSheet.cssRules[0]);

         var style = new Style();
         spyOn(style, "onSet");

         rule.linkStyle("derelict", style);

         expect(style.onSet).toHaveBeenCalledWith(jasmine.any(Function), rule, "derelict")
      });

      it("should set the css rule to the style value", function () {

         var styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         var styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         var zoolander = <CSSStyleRule>styleSheet.cssRules[0];

         var rule = new Rule(zoolander);

         var style = new Style();
         spyOn(style, "get").and.returnValue("blue steel");

         rule.linkStyle("derelict", style);

         expect((<any>zoolander.style).derelict).toBe("blue steel");
      });

      it("should update the style when it is set", function () {

         var styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         var styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         var zoolander = <CSSStyleRule>styleSheet.cssRules[0];

         var rule = new Rule(zoolander);

         var style = new Style();
         spyOn(style, "onSet");

         rule.linkStyle("derelict", style);

         var update = {
            newValue: "the tigre"
         };

         (<jasmine.Spy>(style.onSet)).calls.mostRecent().args[0].call(rule, update, "derelict");

         expect((<any>zoolander.style)).toBe("the tigre");
      });
   });
});
