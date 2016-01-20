///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { Size } from "../src/size";
import { SizeType } from "../src/size-type";
import { Style } from "../src/style";

describe("Size", function() {
   describe("constructing a new Size", function () {
      it("should set the value to 1", function () {
         var size = new Size(1, SizeType.Pixels);

         expect(size.value).toBe(1);
      });

      it("should set the value to 99", function () {
         var size = new Size(99, SizeType.Pixels);

         expect(size.value).toBe(99);
      });
      it("should set the type to Pixels", function () {
         var size = new Size(1, SizeType.Pixels);

         expect(size.type).toBe(SizeType.Pixels);
      });

      it("should set the type to Percentage", function () {
         var size = new Size(99, SizeType.Percentage);

         expect(size.type).toBe(SizeType.Percentage);
      });

      it("should call the super function", function () {
         spyOn(Style, "call");

         var size = new Size(99, SizeType.Percentage);

         expect(Style.call).toHaveBeenCalledWith(size);
      });
   });

   describe("setting the size", function() {
      it("should set the value to 1", function () {
         var size = new Size(99, SizeType.Pixels);

         size.set(1);

         expect(size.value).toBe(1);
      });

      it("should the value to 99", function () {
         var size = new Size(1, SizeType.Pixels);

         size.set(99);

         expect(size.value).toBe(99);
      });

      it("should set the type to Pixels", function () {
         var size = new Size(1, SizeType.Percentage);

         size.set(99, SizeType.Pixels);

         expect(size.type).toBe(SizeType.Pixels);
      });

      it("should set the type to Percentage", function () {
         var size = new Size(99, SizeType.Pixels);

         size.set(99, SizeType.Percentage);

         expect(size.type).toBe(SizeType.Percentage);
      });

      it("should call notifyHandlers", function () {
         var size = new Size(99, SizeType.Percentage);

         spyOn(size, "notifyHandlers");

         size.set(1);

         expect(size.notifyHandlers).toHaveBeenCalled();
      });
   });

   describe("getting the size", function() {
      it("should return '1px'", function () {
         var size = new Size(1, SizeType.Pixels);

         expect(size.get()).toBe("1px");
      });

      it("should return '99px'", function () {
         var size = new Size(99, SizeType.Pixels);

         expect(size.get()).toBe("99px");
      });

      it("should return '1%'", function () {
         var size = new Size(1, SizeType.Percentage);

         expect(size.get()).toBe("1%");
      });

      it("should return '99%'", function () {
         var size = new Size(99, SizeType.Percentage);

         expect(size.get()).toBe("99%");
      });
   });
});
