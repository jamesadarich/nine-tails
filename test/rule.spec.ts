import * as Tape from "tape";
import * as Sinon from "sinon";
import { Rule } from "../src/rule";
import { Style } from "../src/style";

Tape("Rule", (test: Tape.Test) => {

  test.test("linking a style to the Rule", (test: Tape.Test) => {
     test.test("should handle the set event of the style", (test: Tape.Test) => {

        let styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        let styleSheet = <CSSStyleSheet>styleElement.sheet;
        styleSheet.addRule("zoolander");

        let rule = new Rule(<CSSStyleRule>styleSheet.cssRules[0]);

        let style = new Style();
        style.onSet = Sinon.spy();

        rule.linkStyle("derelict", style);

        test.equal(true, style.onSet.called);

     });
  });
});

/*///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { Rule } from "../src/rule";
import { Style } from "../src/style";

describe("Rule", function() {
   describe("linking a style to the Rule", function () {
      it("should handle the set event of the style", function () {

         let styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         let styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         let rule = new Rule(<CSSStyleRule>styleSheet.cssRules[0]);

         let style = new Style();
         spyOn(style, "onSet");

         rule.linkStyle("derelict", style);

         expect(style.onSet).toHaveBeenCalledWith(jasmine.any(Function), rule, "derelict")
      });

      it("should set the css rule to the style value", function () {

         let styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         let styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         let zoolander = <CSSStyleRule>styleSheet.cssRules[0];

         let rule = new Rule(zoolander);

         let style = new Style();
         spyOn(style, "get").and.returnValue("blue steel");

         rule.linkStyle("derelict", style);

         expect((<any>zoolander.style).derelict).toBe("blue steel");
      });

      it("should update the style when it is set", function () {

         let styleElement = document.createElement("style");
         document.head.appendChild(styleElement);

         let styleSheet = <CSSStyleSheet>styleElement.sheet;
         styleSheet.addRule("zoolander");

         let zoolander = <CSSStyleRule>styleSheet.cssRules[0];

         let rule = new Rule(zoolander);

         let style = new Style();
         spyOn(style, "onSet");

         rule.linkStyle("derelict", style);

         let update = {
            newValue: "the tigre"
         };

         (<jasmine.Spy>(style.onSet)).calls.mostRecent().args[0].call(rule, update, "derelict");

         expect((<any>zoolander.style)).toBe("the tigre");
      });
   });
});
*/
