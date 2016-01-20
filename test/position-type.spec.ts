/// <reference path="../src/nine-tails.ts"/>
import { PositionType } from "../src/position-type";
import { Position } from "../src/position";
import { Style } from "../src/style";

describe("Position", function() {
   describe("constructing a new Position", function () {
       it("should set the PositionType to Fixed", function () {
          var position = new Position(PositionType.Fixed);

           expect(position.type).toBe(PositionType.Fixed);
       });
     it("should set the PositionType to Absolute", function () {
        var position = new Position(PositionType.Absolute);

         expect(position.type).toBe(PositionType.Absolute);
     });

      it("should call the super function", function () {

         spyOn(Style, "call");

        var position = new Position(PositionType.Absolute);

         expect(Style.call).toHaveBeenCalledWith(position);
      });
   });

   describe("getting an PositionType", function() {
      it("should return fixed", function () {
         var position = new Position(PositionType.Fixed);

         expect(position.get()).toBe("fixed");
      });

         it("should return absolute", function () {
            var position = new Position(PositionType.Absolute);

            expect(position.get()).toBe("absolute");
         });
   });

   describe("setting an PositionType", function () {
      it("should set the type to Fixed", function() {

         var position = new Position(PositionType.Absolute);

         position.set(PositionType.Fixed);

         expect(position.type).toBe(PositionType.Fixed);
      });

      it("should set the type to Fixed", function() {

         var position = new Position(PositionType.Fixed);

         position.set(PositionType.Absolute);

         expect(position.type).toBe(PositionType.Absolute);
      });

      it("should call notifyHandlers", function() {

         var position = new Position(PositionType.Fixed);

         spyOn(position, "notifyHandlers");

         position.set(PositionType.Absolute);

         expect(position.notifyHandlers).toHaveBeenCalled();
      });
   });
});
