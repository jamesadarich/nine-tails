import { Theme } from "../src/theme";
import * as NineTails from "../src/nine-tails";
import * as Tape from "tape";
import * as Sinon from "sinon";

Tape.test("Theme", (test: Tape.Test) => {
   test.test("constructing a theme", (test: Tape.Test) => {

      test.test("should create a style sheet", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;
         let theme = new Theme();

         test.equal(mockDocument.styleSheets.length, 1);

         test.end();
      });
   });

   test.test("creating a rule", (test: Tape.Test) => {

      test.test("should create a rule with selector 'gotcha'", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;
         let theme = new Theme();

         theme.createRule("gotcha");

         let nineTailsStyleSheet = mockDocument.styleSheets[0];

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "GOTCHA");

         test.end();
      });

      test.test("should create a rule with selector '.found-it'", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;
         let theme = new Theme();

         theme.createRule(".found-it");

         let nineTailsStyleSheet = mockDocument.styleSheets[0];

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, ".found-it");

         test.end();
      });

      test.test("should create a rule with selector 'gotcha' if document has addRule instead of insertRule", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;

         let theme = new Theme();

         let nineTailsStyleSheet = mockDocument.styleSheets[0];
         let insertRule = nineTailsStyleSheet.insertRule;
         nineTailsStyleSheet.addRule = (selector: string, index: number) => {
            insertRule.call(nineTailsStyleSheet, selector + " { }", index || 0);
         };

         nineTailsStyleSheet.insertRule = undefined;

         theme.createRule("gotcha");

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "GOTCHA");

         test.end();
      });

      test.test("should create a rule with selector 'gotcha' if document has rules instead of cssRules", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;

         let theme = new Theme();

         let nineTailsStyleSheet = mockDocument.styleSheets[0];

         let originalInsertRule = nineTailsStyleSheet.insertRule;

         nineTailsStyleSheet.insertRule = (selectorText: string) => {
            nineTailsStyleSheet.cssRules = nineTailsStyleSheet.rules;
            let ruleIndex = originalInsertRule.call(nineTailsStyleSheet, selectorText);
            nineTailsStyleSheet.rules = nineTailsStyleSheet.cssRules;
            delete nineTailsStyleSheet.cssRules;

            return ruleIndex;
         };

         nineTailsStyleSheet.rules = nineTailsStyleSheet.cssRules;
         delete nineTailsStyleSheet.cssRules;

         theme.createRule("gotcha");

         test.equal(nineTailsStyleSheet.rules[0].selectorText, "GOTCHA");

         test.end();
      });

      test.test("should pass a rule back with an existing cssRule if 'gotcha' already exists", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;

         let theme = new Theme();

         let nineTailsStyleSheet = mockDocument.styleSheets[0];
         nineTailsStyleSheet.cssRules[0] = { selectorText: "gotcha" };
         nineTailsStyleSheet.insertRule = Sinon.spy();

         theme.createRule("gotcha");

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "gotcha");
         test.equal(nineTailsStyleSheet.insertRule.callCount, 0);

         test.end();
      });

      test.test("should still create a rule if there is another css rule already", (test: Tape.Test) => {

         let MockBrowser = require("mock-browser").mocks.MockBrowser;
         let mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;

         let theme = new Theme();

         let nineTailsStyleSheet = mockDocument.styleSheets[0];
         nineTailsStyleSheet.cssRules[0] = { selectorText: "something-else" };
         Sinon.spy(nineTailsStyleSheet, "insertRule");

         theme.createRule("gotcha");

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "GOTCHA");
         test.equal(nineTailsStyleSheet.insertRule.callCount, 1);

         test.end();
      });
   });
});
