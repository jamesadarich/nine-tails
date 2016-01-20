///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { OverflowType } from "../src/overflow-type";
import { Overflow } from "../src/overflow";
import { Style } from "../src/style";

describe("Overflow", function() {
   describe("constructing a new Overflow", function () {
       it("should set the OverflowType to Visible", function () {
          var overflow = new Overflow(OverflowType.Visible);

           expect(overflow.type).toBe(OverflowType.Visible);
       });
     it("should set the OverflowType to Hidden", function () {
        var overflow = new Overflow(OverflowType.Hidden);

         expect(overflow.type).toBe(OverflowType.Hidden);
     });

      it("should call the super function", function () {

         spyOn(Style, "call");

        var overflow = new Overflow(OverflowType.Hidden);

         expect(Style.call).toHaveBeenCalledWith(overflow);
      });
   });

   describe("getting an OverflowType", function() {
      it("should return visible", function () {
         var overflow = new Overflow(OverflowType.Visible);

         expect(overflow.get()).toBe("visible");
      });

         it("should return hidden", function () {
            var overflow = new Overflow(OverflowType.Hidden);

            expect(overflow.get()).toBe("hidden");
         });
   });

   describe("setting an OverflowType", function () {
      it("should set the type to Visible", function() {

         var overflow = new Overflow(OverflowType.Hidden);

         overflow.set(OverflowType.Visible);

         expect(overflow.type).toBe(OverflowType.Visible);
      });

      it("should set the type to Visible", function() {

         var overflow = new Overflow(OverflowType.Visible);

         overflow.set(OverflowType.Hidden);

         expect(overflow.type).toBe(OverflowType.Hidden);
      });

      it("should call notifyHandlers", function() {

         var overflow = new Overflow(OverflowType.Visible);

         spyOn(overflow, "notifyHandlers");

         overflow.set(OverflowType.Hidden);

         expect(overflow.notifyHandlers).toHaveBeenCalled();
      });
   });
});
