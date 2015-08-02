///<reference path="color.ts"/>

module NineTails {
  export class Rule {

    private cssRule: CSSStyleRule;

    constructor(cssRule : CSSStyleRule) {
      this.cssRule = cssRule;
    }

    linkStyle(style : string, color : Color) {
      color.onSet(this.setStyle, this, style);
      this.cssRule.style[style] = color.get();
    }

    setStyle(update, style : string) {
      this.cssRule.style[style] = update.newValue;
    }
  }
}
