/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/hue.ts"/>
///<reference path="../src/color.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe('Hue', function() {
   describe('constructing a new Hue', function (){
       it('should set the color', function () {
          var color = new NineTails.Color(1, 2, 3, 0.4);

           var hue = new NineTails.Hue(color);
           expect(hue.color).toBe(color);
       });

        it('should set the contrastColor', function () {
           var color = new NineTails.Color(1, 2, 3, 0.4);
           var contrastColor = new NineTails.Color(4, 3, 2, 0.1);

            var hue = new NineTails.Hue(color, contrastColor);
            expect(hue.contrastColor).toBe(contrastColor);
        });

        it('should set the contrastColor to white if color is dark', function () {
           var color = new NineTails.Color(1, 2, 3, 0.4);

            var hue = new NineTails.Hue(color);
            expect(hue.contrastColor.red).toBe(255);
            expect(hue.contrastColor.green).toBe(255);
            expect(hue.contrastColor.blue).toBe(255);
            expect(hue.contrastColor.alpha).toBe(1);
        });

        it('should set the contrastColor to black if color is light', function () {
           var color = new NineTails.Color(200, 200, 200, 1);

            var hue = new NineTails.Hue(color);
            expect(hue.contrastColor.red).toBe(0);
            expect(hue.contrastColor.green).toBe(0);
            expect(hue.contrastColor.blue).toBe(0);
            expect(hue.contrastColor.alpha).toBe(1);
        });
   });
});
