/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/overflow.ts"/>
///<reference path="../src/overflow-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe("Overflow", function() {
   describe("constructing a new Overflow", function () {
       it("should set the OverflowType to Visible", function () {
          var overflow = new NineTails.Overflow(NineTails.OverflowType.Visible);

           expect(overflow.type).toBe(NineTails.OverflowType.Visible);
       });
     it("should set the OverflowType to Hidden", function () {
        var overflow = new NineTails.Overflow(NineTails.OverflowType.Hidden);

         expect(overflow.type).toBe(NineTails.OverflowType.Hidden);
     });

      it("should call the super function", function () {

         spyOn(NineTails.Style, "call");

        var overflow = new NineTails.Overflow(NineTails.OverflowType.Hidden);

         expect(NineTails.Style.call).toHaveBeenCalledWith(overflow);
      });
   });

   describe("getting an OverflowType", function() {
      it("should return visible", function () {
         var overflow = new NineTails.Overflow(NineTails.OverflowType.Visible);

         expect(overflow.get()).toBe("visible");
      });

         it("should return hidden", function () {
            var overflow = new NineTails.Overflow(NineTails.OverflowType.Hidden);

            expect(overflow.get()).toBe("hidden");
         });
   });

   describe("setting an OverflowType", function () {
      it("should set the type to Visible", function() {

         var overflow = new NineTails.Overflow(NineTails.OverflowType.Hidden);

         overflow.set(NineTails.OverflowType.Visible);

         expect(overflow.type).toBe(NineTails.OverflowType.Visible);
      });

      it("should set the type to Visible", function() {

         var overflow = new NineTails.Overflow(NineTails.OverflowType.Visible);

         overflow.set(NineTails.OverflowType.Hidden);

         expect(overflow.type).toBe(NineTails.OverflowType.Hidden);
      });

      it("should call notifyHandlers", function() {

         var overflow = new NineTails.Overflow(NineTails.OverflowType.Visible);

         spyOn(overflow, "notifyHandlers");

         overflow.set(NineTails.OverflowType.Hidden);

         expect(overflow.notifyHandlers).toHaveBeenCalled();
      });
   });
});
