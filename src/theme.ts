/// <reference path="./nine-tails.ts"/>
///<reference path="rule.ts"/>
///<reference path="size.ts"/>
///<reference path="size-type.ts"/>

module NineTails {
  export class Theme {

    public styleSheet: CSSStyleSheet;
    //public colors: Color[];
    public sizes: Size[];

    constructor () {
      var styleElement = document.createElement("style");
      styleElement.title = "nine-tails";
      styleElement.className = "nine-tails-theme";
      //document.head.appendChild(styleElement);
      document.querySelector('head').appendChild(styleElement);

      this.styleSheet = <CSSStyleSheet>styleElement.sheet || <CSSStyleSheet>styleElement.styleSheet;

      //change this to create class that extends CSSStyleSheet
      styleElement["theme"] = this;

      //this.colors = [];
      this.sizes = [];
    }

    /*
    createColor(value: string, name?: string): Color {
      var color = new Color(value, name);
      this.colors.push(color);
      return color;
    }
    */

    createSize(value: number, type: SizeType): Size {
      var size = new Size(value, type);
      this.sizes.push(size);
      return size;
    }

    createRule(selector: string) : Rule {
    if (this.styleSheet.insertRule) {
    this.styleSheet.insertRule(selector + ' { }', 0);
    }else {
      this.styleSheet.addRule(selector);
      }

      var cssRules = this.styleSheet.cssRules || this.styleSheet.rules;

      for (var i = 0; i < cssRules.length; i++) {
        var rule = <CSSStyleRule>cssRules[i];
        if (rule.selectorText === selector) {
          //need to keep the reference to module whilst this isn"t compiling correctly
          return new NineTails.Rule(rule);
        }
      }
    }
  }
}
