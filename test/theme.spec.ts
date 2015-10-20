/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/theme.ts"/>
///<reference path="../src/rule.ts"/>
///<reference path="../src/size.ts"/>
///<reference path="../src/size-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe('Theme', function() {
   describe('constructing a theme', function () {
      it('should create an empty color array', function () {

         var theme = new NineTails.Theme();

         expect(theme.colors.length).toBe(0);
      });

      it('should create an empty size array', function () {

         var theme = new NineTails.Theme();

         expect(theme.sizes.length).toBe(0);
      });

      it('should create a style sheet element', function () {

         var theme = new NineTails.Theme();

         expect(theme.styleSheet).not.toBe(null);

         var styleElement = <HTMLElement>theme.styleSheet.ownerNode;
         expect(styleElement.nodeName).toBe('STYLE');
         expect(styleElement.className).toBe('nine-tails-theme');
         expect(styleElement.title).toBe('nine-tails');
         expect(styleElement['theme']).toBe(theme);
      });
   });

   describe('creating a color', function() {
      it('should create a color with red 42', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(42, 0, 0, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(42, 0, 0, 0, undefined);
      });

      it('should create a color with red 24', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(24, 0, 0, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(24, 0, 0, 0, undefined);
      });

      it('should create a color with green 42', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 42, 0, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 42, 0, 0, undefined);
      });

      it('should create a color with green 24', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 24, 0, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 24, 0, 0, undefined);
      });

      it('should create a color with blue 42', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 42, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 42, 0, undefined);
      });

      it('should create a color with blue 24', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 24, 0);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 24, 0, undefined);
      });

      it('should create a color with alpha 42', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 42);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 0, 42, undefined);
      });

      it('should create a color with alpha 24', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 24);

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 0, 24, undefined);
      });

      it('should create a color with name teal', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 0, 'teal');

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 0, 0, 'teal');
      });

      it('should create a color with name ultramarine', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 0, 'ultramarine');

         expect(NineTails.Color).toHaveBeenCalledWith(0, 0, 0, 0, 'ultramarine');
      });

      it('should add the created color to the theme\'s array', function () {
         var color = { some: 'fancy color' };
         spyOn(NineTails, 'Color').and.returnValue(color);

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 0);

         expect(theme.colors).toContain(color);
      });

      it('should add a different created color to the theme\'s array', function () {
         var anotherColor = { an: 'even fancier color' };
         spyOn(NineTails, 'Color').and.returnValue(anotherColor);

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 0);

         expect(theme.colors).toContain(anotherColor);
      });

      it('should return the created color', function () {
         var color = { some: 'fancy color' };
         spyOn(NineTails, 'Color').and.returnValue(color);

         var theme = new NineTails.Theme();

         var createdColor = theme.createColor(0, 0, 0, 0);

         expect(createdColor).toBe(color);
      });

      it('should return a different created color', function () {
         var anotherColor = { an: 'even fancier color' };
         spyOn(NineTails, 'Color').and.returnValue(anotherColor);

         var theme = new NineTails.Theme();

         var createdColor = theme.createColor(0, 0, 0, 0);

         expect(createdColor).toBe(anotherColor);
      });

      it('should have a color array of length 1 if it was empty', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.createColor(0, 0, 0, 0);

         expect(theme.colors.length).toBe(1);
      });

      it('should have a color array of length 2 if it had 1 item in it', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.colors.push(new NineTails.Color(0, 0, 0, 0));

         theme.createColor(0, 0, 0, 0);

         expect(theme.colors.length).toBe(2);
      });

      it('should have a color array of length 3 if it had 2 item in it', function () {
         spyOn(NineTails, 'Color');

         var theme = new NineTails.Theme();

         theme.colors.push(new NineTails.Color(0, 0, 0, 0));
         theme.colors.push(new NineTails.Color(0, 0, 0, 0));

         theme.createColor(0, 0, 0, 0);

         expect(theme.colors.length).toBe(3);
      });
   });

   describe('creating a size', function() {
      it('should create a size with value 42', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.createSize(42, NineTails.SizeType.Pixels);

         expect(NineTails.Size).toHaveBeenCalledWith(42, NineTails.SizeType.Pixels);
      });

      it('should create a size with value 24', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.createSize(24, NineTails.SizeType.Pixels);

         expect(NineTails.Size).toHaveBeenCalledWith(24, NineTails.SizeType.Pixels);
      });

      it('should create a size with type Pixels', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(NineTails.Size).toHaveBeenCalledWith(0, NineTails.SizeType.Pixels);
      });

      it('should create a size with type Percentage', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.createSize(0, NineTails.SizeType.Percentage);

         expect(NineTails.Size).toHaveBeenCalledWith(0, NineTails.SizeType.Percentage);
      });

      it('should add the created size to the theme\'s array', function () {
         var size = { some: 'fancy size' };
         spyOn(NineTails, 'Size').and.returnValue(size);

         var theme = new NineTails.Theme();

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(theme.sizes).toContain(size);
      });

      it('should add a different created size to the theme\'s array', function () {
         var anotherSize = { an: 'even fancier size' };
         spyOn(NineTails, 'Size').and.returnValue(anotherSize);

         var theme = new NineTails.Theme();

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(theme.sizes).toContain(anotherSize);
      });

      it('should return the created size', function () {
         var size = { some: 'fancy size' };
         spyOn(NineTails, 'Size').and.returnValue(size);

         var theme = new NineTails.Theme();

         var createdSize = theme.createSize(0, NineTails.SizeType.Pixels);

         expect(createdSize).toBe(size);
      });

      it('should return a different created size', function () {
         var anotherSize = { an: 'even fancier size' };
         spyOn(NineTails, 'Size').and.returnValue(anotherSize);

         var theme = new NineTails.Theme();

         var createdSize = theme.createSize(0, NineTails.SizeType.Pixels);

         expect(createdSize).toBe(anotherSize);
      });

      it('should have a size array of length 1 if it was empty', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(theme.sizes.length).toBe(1);
      });

      it('should have a size array of length 2 if it had 1 item in it', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.sizes.push(new NineTails.Size(0, NineTails.SizeType.Pixels));

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(theme.sizes.length).toBe(2);
      });

      it('should have a size array of length 3 if it had 2 item in it', function () {
         spyOn(NineTails, 'Size');

         var theme = new NineTails.Theme();

         theme.sizes.push(new NineTails.Size(0, NineTails.SizeType.Pixels));
         theme.sizes.push(new NineTails.Size(0, NineTails.SizeType.Pixels));

         theme.createSize(0, NineTails.SizeType.Pixels);

         expect(theme.sizes.length).toBe(3);
      });
   });

   describe('creating a rule', function() {

      it('should create a rule with selector "gotcha"', function () {
         var ruleSpy = spyOn(NineTails, 'Rule');

         var theme = new NineTails.Theme();

         theme.createRule('gotcha');

         expect(ruleSpy.calls.mostRecent().args[0].selectorText).toBe('gotcha');
      });

   });
});
