///<reference path="../../src/theme.ts"/>
///<reference path="../../src/color.ts"/>

var theme = new NineTails.Theme();
var ruleOne = theme.createRule('h1');
var ruleTwo = theme.createRule('h2');
var ruleThree = theme.createRule('p');

var colorOne = theme.createColor('primary', 255, 0, 0);
var colorTwo = theme.createColor('secondary', 0, 255, 0);
var colorThree = theme.createColor('tertiary', 0, 0, 255);
ruleOne.linkStyle('color', colorOne);
ruleTwo.linkStyle('color', colorTwo);
ruleThree.linkStyle('color', colorThree);
