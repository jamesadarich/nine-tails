///<reference path="../src/nine-tails.ts"/>
///<reference path="../src/border-style.ts"/>
///<reference path="../src/border-style-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe("BorderStyle", function () {
   describe("constructing a new BorderStyle", function(){
      it("should set the type to Dashed", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Dashed);

         expect(borderStyle.type).toBe(NineTails.BorderStyleType.Dashed);
      });

      it("should set the type to Solid", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Solid);

         expect(borderStyle.type).toBe(NineTails.BorderStyleType.Solid);
      });

      it("should call the super function", function() {

         spyOn(NineTails.Style, "call");

         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Solid);

         expect(NineTails.Style.call).toHaveBeenCalledWith(borderStyle);
      });
   });

   describe("getting a BorderStyle", function(){
      it("should return 'dashed' if type is Dashed", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Dashed);

         expect(borderStyle.get()).toBe("dashed");
      });

      it("should return 'solid' if type is Solid", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Solid);

         expect(borderStyle.get()).toBe("solid");
      });
   });

   describe("setting a BorderStyle", function(){
      it("should set the type to Dashed", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Solid);

         borderStyle.set(NineTails.BorderStyleType.Dashed);

         expect(borderStyle.type).toBe(NineTails.BorderStyleType.Dashed);
      });

      it("should set the type to Solid", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Dashed);

         borderStyle.set(NineTails.BorderStyleType.Solid);

         expect(borderStyle.type).toBe(NineTails.BorderStyleType.Solid);
      });

      it("should call notifyHandlers", function() {
         var borderStyle = new NineTails.BorderStyle(NineTails.BorderStyleType.Solid);

         spyOn(borderStyle, "notifyHandlers");

         borderStyle.set(NineTails.BorderStyleType.Dashed);

         expect(borderStyle.notifyHandlers).toHaveBeenCalled();
      });
   });
});
