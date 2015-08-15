///<reference path="../src/theme.ts"/>
///<reference path="./color-editor.ts"/>
///<reference path="./size-editor.ts"/>
///<reference path="../src/overflow.ts"/>
///<reference path="../src/overflow-type.ts"/>
///<reference path="../src/position.ts"/>
///<reference path="../src/position-type.ts"/>
///<reference path="../src/border-style.ts"/>
///<reference path="../src/border-style-type.ts"/>

module NineTails.DevTools {
  export class Toolkit {

    private _element: HTMLElement;

    private _theme: NineTails.Theme;
    private _toolkitTheme: NineTails.Theme;

      constructor() {
        console.log('NineTails.js dev tools started...');

        this._element = document.createElement('div');
        var toolKit = document.createElement('div');
        this._element.className = 'nine-tails-toolkit-container';
        this._element.appendChild(toolKit);
        toolKit.className = 'nine-tails-toolkit';
        document.body.appendChild(this._element);

        this._theme = <NineTails.Theme>document.querySelector('.nine-tails-theme')['theme'];

        for (var i = 0; i < this._theme.colors.length; i++) {

          var colorEditor = new ColorEditor(this._theme.colors[i], this._theme);
          toolKit.appendChild(colorEditor.element);
        }

        for (var i = 0; i < this._theme.sizes.length; i++) {

          var sizeEditor = new SizeEditor(this._theme.sizes[i], this._theme);
          toolKit.appendChild(sizeEditor.element);
        }

        this._toolkitTheme = new Theme();
        var nineTailsToolkitContainerRule = this._toolkitTheme.createRule('.nine-tails-toolkit-container');
        var zeroSize = this._toolkitTheme.createSize(0, SizeType.Pixels);
        nineTailsToolkitContainerRule.linkStyle('top', zeroSize);
        nineTailsToolkitContainerRule.linkStyle('right', zeroSize);
        var toolkitContainerHeight = this._toolkitTheme.createSize(500, SizeType.Pixels);
        nineTailsToolkitContainerRule.linkStyle('height', toolkitContainerHeight);
        var nineTailsToolkitPosition = new Position(PositionType.Fixed);
        nineTailsToolkitContainerRule.linkStyle('position', nineTailsToolkitPosition);

        var nineTailsToolkitRule = this._toolkitTheme.createRule('.nine-tails-toolkit');
        var toolkitHeight = this._toolkitTheme.createSize(100, SizeType.Percentage);
        nineTailsToolkitRule.linkStyle('max-height', toolkitHeight);
        var toolkitPadding = this._toolkitTheme.createSize(10, SizeType.Pixels);
        nineTailsToolkitRule.linkStyle('padding', toolkitPadding);
        var toolkitBackgroundColor = this._toolkitTheme.createColor(255, 255, 255, 0.65);
        nineTailsToolkitRule.linkStyle('background-color', toolkitBackgroundColor);
        var toolkitDividerColor = this._toolkitTheme.createColor(235, 235, 235, 1);
        nineTailsToolkitRule.linkStyle('border-color', toolkitDividerColor);
        var toolkitBorderWidth = this._toolkitTheme.createSize(1, SizeType.Pixels);
        nineTailsToolkitRule.linkStyle('border-width', toolkitBorderWidth);
        var toolkitBorderStyle = new BorderStyle(BorderStyleType.Solid);
        nineTailsToolkitRule.linkStyle('border-style', toolkitBorderStyle);
        var nineTailsToolkitOverflow = new Overflow(OverflowType.Auto);
        nineTailsToolkitRule.linkStyle('overflow-y', nineTailsToolkitOverflow);
      }
  }

  document.onkeydown = function (event) {
    if(event.ctrlKey && event.shiftKey && event.keyCode === 57) {
      var toolkit = new Toolkit();
    }
  }
}
