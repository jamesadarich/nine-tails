/// <reference path="../../js/nine-tails.d.ts"/>

var theme = new NineTails.Theme();
var ruleOne = theme.createRule("h1");
var ruleTwo = theme.createRule("h2");
var ruleThree = theme.createRule("p");
var ruleFour = theme.createRule("div");
var body = theme.createRule("body");

var colorOne = new NineTails.Color("rgb(255, 0, 0)");
var colorTwo = new NineTails.Color("rgb(0, 255, 0)");
var colorThree = new NineTails.Color("rgb(0, 0, 255)");
var backgroundColor = new NineTails.Color("rgb(240, 240, 240)");

var sizeOne = theme.createSize(20, NineTails.SizeType.Pixels);
body.linkStyle("background-color", backgroundColor);

ruleOne.linkStyle("color", colorOne);
ruleTwo.linkStyle("color", colorTwo);
ruleThree.linkStyle("color", colorThree);
ruleFour.linkStyle("padding", sizeOne);

var colorNameResult = theme.createRule("#color-name-result");
var colorNameColor = new NineTails.Color("rgb(0, 255, 255)");
colorNameResult.linkStyle("background-color", colorNameColor);

document.onreadystatechange = function () {
var colorNameInput = <HTMLInputElement>document.getElementById("color-name");
   colorNameInput.oninput = function () {
      colorNameColor.set(colorNameInput.value);
   }
}
