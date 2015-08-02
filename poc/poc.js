var Pallette = function (name) {
  return {
    name: name,
    hues: [],
    addHue: function (hue) {
      hues.push(hue);
    }
  };
};

var theme = new NineTails.Theme();

var huePrimary = new NineTails.Hue(new NineTails.Color(255, 0, 0));
var hueOne = new NineTails.Hue(new NineTails.Color(255, 40, 40));
var hueTwo = new NineTails.Hue(new NineTails.Color(255, 80, 80));
var hueThree = new NineTails.Hue(new NineTails.Color(255, 120, 120));
var hueFour = new NineTails.Hue(new NineTails.Color(255, 160, 160));
var hueFive = new NineTails.Hue(new NineTails.Color(255, 200, 200));

var primaryRule = theme.createRule('.primary');
var hueOneRule = theme.createRule('.hue-1');
var hueTwoRule = theme.createRule('.hue-2');
var hueThreeRule = theme.createRule('.hue-3');
var hueFourRule = theme.createRule('.hue-4');
var hueFiveRule = theme.createRule('.hue-5');

primaryRule.linkStyle('color', huePrimary.color);
primaryRule.linkStyle('background-color', huePrimary.contrastColor);
hueOneRule.linkStyle('color', hueOne.color);
hueOneRule.linkStyle('background-color', hueOne.contrastColor);
hueTwoRule.linkStyle('color', hueTwo.color);
hueTwoRule.linkStyle('background-color', hueTwo.contrastColor);
hueThreeRule.linkStyle('color', hueThree.color);
hueThreeRule.linkStyle('background-color', hueThree.contrastColor);
hueFourRule.linkStyle('color', hueFour.color);
hueFourRule.linkStyle('background-color', hueFour.contrastColor);
hueFiveRule.linkStyle('color', hueFive.color);
hueFiveRule.linkStyle('background-color', hueFive.contrastColor);
