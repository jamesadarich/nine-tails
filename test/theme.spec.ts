import { Theme } from "../src/theme";
import * as NineTails from "../src/nine-tails";
import * as Tape from "tape";
import * as Sinon from "sinon";
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();
(<any>global).document = mock.getDocument(),

Tape("Theme", (test: Tape.Test) => {
   test.test("constructing a theme", (test: Tape.Test) => {

      test.test("should create a style sheet element", (test: Tape.Test) => {

         var theme = new Theme();

         test.notEqual(theme.styleSheet, null);
         test.notEqual(theme.styleSheet, undefined);

         /*
         var styleElement = <HTMLElement>theme.styleSheet.ownerNode;
         test.equal(styleElement.nodeName, "STYLE");
         test.equal(styleElement.className, "nine-tails-theme");
         test.equal(styleElement.title, "nine-tails");
         test.equal((<any>styleElement)["theme"], theme);*/
      });
   });

   test.test("creating a rule", (test: Tape.Test) => {

      test.test("should create a rule with selector 'gotcha'", (test: Tape.Test) => {
         (<any>NineTails).Rule = Sinon.spy();

         var theme = new Theme();

         theme.createRule("gotcha");

         test.equal((<Sinon.SinonSpy>(<any>NineTails).Rule).args[0][0].selectorText, "GOTCHA");
      });
   });
});
