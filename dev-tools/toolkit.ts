///<reference path="../src/theme.ts"/>
///<reference path="./color-editor.ts"/>

module NineTails.DevTools {
  export class Toolkit {

    private _element: HTMLElement;

    private _theme: NineTails.Theme;

      constructor() {
        console.log('NineTails.js dev tools started...');
        this._element = document.createElement('div');
        this._element.className = 'nine-tails-toolkit';
        this._element.style.border = 'solid 1px #eee';
        this._element.style.width = '100px';
        this._element.style.height = '100px';
        this._element.style.margin = '10px';
        this._element.style.backgroundColor = '#fff';
        this._element.style.position = 'fixed';
        this._element.style.top = '0';
        this._element.style.right = '0';
        document.body.appendChild(this._element);

        this._theme = <NineTails.Theme>document.querySelector('.nine-tails-theme')['theme'];

        for (var i = 0; i < this._theme.colors.length; i++) {

          var colorEditor = new ColorEditor(this._theme.colors[i], this._theme);
          this._element.appendChild(colorEditor.element);


        }
      }
  }

  document.onkeydown = function (event) {
    if(event.ctrlKey && event.shiftKey && event.keyCode === 57) {
      var toolkit = new Toolkit();
    }
  }
}
