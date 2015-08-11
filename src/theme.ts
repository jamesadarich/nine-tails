///<reference path="rule.ts"/>

module NineTails {
  export class Theme {

    private styleSheet: CSSStyleSheet;
    public colors: Color[];

    constructor () {
      var styleElement = document.createElement('style');
      styleElement.title = 'nine-tails';
      styleElement.className = 'nine-tails-theme';
      document.head.appendChild(styleElement);

      this.styleSheet = <CSSStyleSheet>styleElement.sheet;

      //change this to create class that extends CSSStyleSheet
      styleElement['theme'] = this;

      this.colors = [];
    }

    createColor(name: string, red: number, green: number, blue: number): Color {
      var color = new Color(name, red, green, blue);
      this.colors.push(color);
      return color;
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
