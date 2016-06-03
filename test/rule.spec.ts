import * as Tape from "tape";
import * as Sinon from "sinon";
import { Rule } from "../src/rule";
import { Style } from "../src/style";

Tape("Rule", (test: Tape.Test) => {

  test.test("linking a style to the Rule", (test: Tape.Test) => {
     test.test("should handle the set event of the style", (test: Tape.Test) => {

        let zoolander = <CSSStyleRule>{};

        let rule = new Rule(zoolander);

        let style = new Style();
        style.onSet = Sinon.spy();

        rule.linkStyle("derelict", style);

        test.equal(true, (<Sinon.SinonSpy>style.onSet).calledWith(Sinon.match.func, rule));

        test.end();
     });

     test.test("should set the css rule to the style value", (test: Tape.Test) => {

       let zoolander = <CSSStyleRule>{
          style: {}
       };

       let rule = new Rule(zoolander);

        let style = new Style();
        style.onSet = Sinon.spy();
        style.get = () => "blue steel";

        rule.linkStyle("derelict", style);

        test.equal("blue steel", zoolander.style["derelict"]);

        test.end();
     });

     test.test("should update the style when it is set", (test: Tape.Test) => {

       let zoolander = <CSSStyleRule>{
          style: {}
       };

       let rule = new Rule(zoolander);

        let style = new Style();

        rule.linkStyle("derelict", style);

        style.setValue("le tigre");

        test.equal("le tigre", zoolander.style["derelict"]);

        test.end();
     });

     test.test("should transform dash separated style to camel case", (test: Tape.Test) => {

       let zoolander = <CSSStyleRule>{
          style: {}
       };

       let rule = new Rule(zoolander);

        let style = new Style();
       style.onSet = Sinon.spy();
       style.get = () => "blue steel";

        rule.linkStyle("best-look", style);

        test.equal("blue steel", zoolander.style["bestLook"]);

        test.end();
     });

     test.test("should update the style dash separated style to camel case", (test: Tape.Test) => {

       let zoolander = <CSSStyleRule>{
          style: {}
       };

       let rule = new Rule(zoolander);

        let style = new Style();

        rule.linkStyle("best-look", style);

        style.setValue("magnum");

        test.equal("magnum", zoolander.style["bestLook"]);

        test.end();
     });
  });
});
