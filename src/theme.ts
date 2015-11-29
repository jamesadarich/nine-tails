
import { Rule } from "./rule";

//namespace NineTails {
  export class Theme {

    public styleSheet: CSSStyleSheet;
    //public colors: Color[];
    //public sizes: Size[];

    constructor () {
      var styleElement = document.createElement("style");
      styleElement.title = "nine-tails";
      styleElement.className = "nine-tails-theme";
      //document.head.appendChild(styleElement);
      document.querySelector("head").appendChild(styleElement);

      this.styleSheet = <CSSStyleSheet>document.styleSheets[document.styleSheets.length -1];//<CSSStyleSheet>styleElement.sheet || <CSSStyleSheet>styleElement.styleSheet;

      //change this to create class that extends CSSStyleSheet
      (<any>styleElement)["theme"] = this;

      //this.colors = [];
      //this.sizes = [];
    }

    /*
    createColor(value: string, name?: string): Color {
      var color = new Color(value, name);
      this.colors.push(color);
      return color;
    }

    createSize(value: number, type: SizeType): Size {
      var size = new Size(value, type);
      this.sizes.push(size);
      return size;
    }
    */

    createRule(selector: string) : Rule {
      var ruleIndex = 0;
         var selectors = selector.split(" ");
         for(var i = 0; i < selectors.length; i++) {
            if (selectors[i].charAt(0) !== "." && selectors[i].charAt(0) !== "#") {
               selectors[i] = selectors[i].toUpperCase();
            }
         }

         selector = selectors.join(' ');

    if (this.styleSheet.insertRule) {
       ruleIndex = this.styleSheet.insertRule(selector + " { }", 0);
    }else {
       ruleIndex = this.styleSheet.addRule(selector);
      }


      var cssRules = this.styleSheet.cssRules || this.styleSheet.rules;
      /*if (selector.charAt(0) !== "." && selector.charAt(0) !== "#") {
        selector = selector.toLowerCase();
      }*/
      return new Rule(<CSSStyleRule>cssRules[ruleIndex]);
      /*for (var i = 0; i < cssRules.length; i++) {
        var rule = <CSSStyleRule>cssRules[i];
        if (rule.selectorText.toLowerCase() === selector) {
          //need to keep the reference to namespace whilst this isn"t compiling correctly
          return new NineTails.Rule(rule);
        }
      }*/
    }
  }
//}
