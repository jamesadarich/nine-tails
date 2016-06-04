import { Theme } from "../src/theme";
import * as NineTails from "../src/nine-tails";
import * as Tape from "tape";
import * as Sinon from "sinon";

Tape.test("Theme", (test: Tape.Test) => {
   test.test("constructing a theme", (test: Tape.Test) => {

      test.test("should create a style sheet", (test: Tape.Test) => {

        var MockBrowser = require('mock-browser').mocks.MockBrowser;
        var mockDocument = new MockBrowser().getDocument();
        (<any>global).document = mockDocument;
         var theme = new Theme();

         test.equal(mockDocument.styleSheets.length, 1);

         test.end();
      });
   });

   test.test("creating a rule", (test: Tape.Test) => {

      test.test("should create a rule with selector 'gotcha'", (test: Tape.Test) => {

        var MockBrowser = require('mock-browser').mocks.MockBrowser;
        var mockDocument = new MockBrowser().getDocument();
        (<any>global).document = mockDocument;
         var theme = new Theme();

         theme.createRule("gotcha");

         var nineTailsStyleSheet = mockDocument.styleSheets[0];

         test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "gotcha");

         test.end();
      });

       test.test("should create a rule with selector '.found-it'", (test: Tape.Test) => {

         var MockBrowser = require('mock-browser').mocks.MockBrowser;
         var mockDocument = new MockBrowser().getDocument();
         (<any>global).document = mockDocument;
          var theme = new Theme();

          theme.createRule(".found-it");

          var nineTailsStyleSheet = mockDocument.styleSheets[0];

          test.equal(nineTailsStyleSheet.cssRules[0].selectorText, ".found-it");

          test.end();
       });

     test.test("should create a rule with selector 'gotcha' if document has addRule instead of insertRule", (test: Tape.Test) => {

       var MockBrowser = require('mock-browser').mocks.MockBrowser;
       var mockDocument = new MockBrowser().getDocument();
       (<any>global).document = mockDocument;

        var theme = new Theme();

       var nineTailsStyleSheet = mockDocument.styleSheets[0];

       nineTailsStyleSheet.addRule = nineTailsStyleSheet.insertRule.bind(nineTailsStyleSheet);
       delete nineTailsStyleSheet.insertRule;

        theme.createRule("gotcha");

        test.equal(nineTailsStyleSheet.cssRules[0].selectorText, "gotcha");

        test.end();
     });

     test.test("should create a rule with selector 'gotcha' if document has rules instead of cssRules", (test: Tape.Test) => {

       var MockBrowser = require('mock-browser').mocks.MockBrowser;
       var mockDocument = new MockBrowser().getDocument();
       (<any>global).document = mockDocument;

        var theme = new Theme();

        var nineTailsStyleSheet = mockDocument.styleSheets[0];

        var originalInsertRule = nineTailsStyleSheet.insertRule;

        nineTailsStyleSheet.insertRule = (selectorText: string) => {
          nineTailsStyleSheet.cssRules = nineTailsStyleSheet.rules;
          var ruleIndex = originalInsertRule.call(nineTailsStyleSheet, selectorText);
          nineTailsStyleSheet.rules = nineTailsStyleSheet.cssRules;
          delete nineTailsStyleSheet.cssRules;

          return ruleIndex;
        }

       nineTailsStyleSheet.rules = nineTailsStyleSheet.cssRules;
       delete nineTailsStyleSheet.cssRules;

        theme.createRule("gotcha");

        test.equal(nineTailsStyleSheet.rules[0].selectorText, "gotcha");

        test.end();
     });
   });
});
