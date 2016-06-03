import { Theme } from "../src/theme";
import * as NineTails from "../src/nine-tails";
import * as Tape from "tape";
import * as Sinon from "sinon";
var MockBrowser = require('mock-browser').mocks.MockBrowser;
  var mockDocument = new MockBrowser().getDocument();
  (<any>global).document = mockDocument;
   var theme = new Theme();

Tape.test("Theme", (test: Tape.Test) => {
   test.test("constructing a theme", (test: Tape.Test) => {

      test.test("should create a style sheet element", (test: Tape.Test) => {


         var styleElement = <HTMLElement>mockDocument.styleSheets[0].ownerNode;
         //test.equal(styleElement.nodeName, "STYLE");
         test.equal(styleElement.className, "nine-tails-theme");
         test.equal(styleElement.title, "nine-tails");
         test.equal((<any>styleElement)["theme"], theme);

         test.end();
      });
   });

   test.test("creating a rule", (test: Tape.Test) => {

      test.test("should create a rule with selector 'gotcha'", (test: Tape.Test) => {

         var theme = new Theme();

         theme.createRule("gotcha");

         test.end();
      });
   });
});
