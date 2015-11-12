

var theme = new NineTails.Theme();
var ruleOne = theme.createRule('h1');
var ruleTwo = theme.createRule('h2');
var ruleThree = theme.createRule('p');
var ruleFour = theme.createRule('div');
var body = theme.createRule('body');

var colorOne = theme.createColor(255, 0, 0, 1, 'primary');
var colorTwo = theme.createColor(0, 255, 0, 1, 'secondary');
var colorThree = theme.createColor(0, 0, 255, 1, 'tertiary');
var backgroundColor = theme.createColor(240, 240, 240, 1, 'background');

var sizeOne = theme.createSize(20, NineTails.SizeType.Pixels);
body.linkStyle('background-color', backgroundColor);

ruleOne.linkStyle('color', colorOne);
ruleTwo.linkStyle('color', colorTwo);
ruleThree.linkStyle('color', colorThree);
ruleFour.linkStyle('padding', sizeOne);

var colorNameResult = theme.createRule('#color-name-result');
var colorNameColor = theme.createColor(0, 255, 0, 1, 'secondary');
colorNameResult.linkStyle('background-color', colorNameColor);

document.onreadystatechange = function () {
var colorNameInput = <HTMLInputElement>document.getElementById('color-name');
colorNameInput.oninput = function () {
   colorNameColor.setName(colorNameInput.value);
}
}
