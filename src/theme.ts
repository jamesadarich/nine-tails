///<reference path="rule.ts"/>

module NineTails {
  export class Theme {

    private styleSheet: CSSStyleSheet;

    constructor () {
      var styleElement = <HTMLStyleElement>document.getElementById('nine-tails');
      if (styleElement === null) {
        styleElement = document.createElement('style');
        styleElement.id = 'nine-tails';
        styleElement.title = 'nine-tails';
        document.head.appendChild(styleElement);
      }

      this.styleSheet = <CSSStyleSheet>styleElement.sheet;
    }

    createRule(selector: string) : Rule {
      this.styleSheet.addRule(selector);

      for (var i = 0; i < this.styleSheet.cssRules.length; i++) {
        var rule = <CSSStyleRule>this.styleSheet.cssRules[i];
        if (rule.selectorText === selector) {
          //need to keep the reference to module whilst this isn't compiling correctly
          return new NineTails.Rule(rule);
        }
      }
    }
  }
}
