# NineTails.js

Lots of styles?
Quick mock ups?
User cusomisations?
Change style regularly?
No problemo!

## NineTails quickly changes your page with swift sneakiness

Want to see what your web app will look like in teal? Or your blog in mauve? Fear not it can be changed in a jiffy!

## NineTails remembers the connections to ensure full deception

By linking rules to a hue you can ensure that changing a hue will effect all the rules that it is applied to.
No more charging around the CSS for you! Hooray!

## NineTails in action

### Import it

```
var NineTails = require("nine-tails");
```

### Create a theme
this let's NineTails create a StyleSheet to apply it's styles

```
var myTheme = new NineTails.Theme();
```

### Create a rule
this will create a rule that matches a CSS selector

```
var bodyRule = myTheme.createRule("body");
```

### Create a style

```
var primaryColor = new NineTails.Color("red");
```

### Link that style
From now on the style will be linked to that property, in this case the body's color will be always be updated to be the value of ```primaryColor```

```
bodyRule.linkStyle("color", primaryColor);

```

### Update a style
Change the style and now the body's color style will change from red to green

```
primaryColor.set("green");
```
