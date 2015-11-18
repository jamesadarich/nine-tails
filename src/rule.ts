/// <reference path="./nine-tails.ts"/>
///<reference path="style.ts"/>

module NineTails {
  export class Rule {

    private cssRule: CSSStyleRule;

    constructor(cssRule : CSSStyleRule) {
      this.cssRule = cssRule;
    }

    public linkStyle(styleName : string, style : Style): void {
      style.onSet(this.setStyle, this, styleName);
      styleName = styleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
      this.cssRule.style[styleName] = style.get();
    }

    private setStyle(update, styleName : string): void {
      styleName = styleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
      this.cssRule.style[styleName] = update.newValue;
    }
  }
}
