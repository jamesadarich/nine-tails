
import { Style } from "./style";

  export class Rule {

    private cssRule: CSSStyleRule;

    constructor(cssRule: CSSStyleRule) {
      this.cssRule = cssRule;
    }

    public linkStyle(styleName: string, style: Style): void {
      style.onSet((event: any) => this.setStyle(event.newValue, styleName), this);
      styleName = styleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
      try {
        (<any>this.cssRule.style)[styleName] = style.get();

      }
      catch (e) {

      }
    }

    private setStyle(value: any, styleName: string): void {
      styleName = styleName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

      try {
        (<any>this.cssRule.style)[styleName] = value;

      }
      catch (e) {

      }
    }
  }
