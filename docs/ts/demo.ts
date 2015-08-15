///<reference path="../../src/theme.ts"/>
///<reference path="../../src/color.ts"/>
///<reference path="../../src/size-type.ts"/>

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
