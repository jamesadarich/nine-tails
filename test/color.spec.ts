/*///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { Color } from "../src/color";
import { Style } from "../src/style";

describe("Color", function() {
   describe("constructing a new Color", function (){
      it("should set the red to 100", function () {
         var color = new Color("rgba(100, 0, 0, 0)");

         expect(color.red).toBe(100);
      });

      it("should set the red to 255", function () {
         var color = new Color("rgba(255, 0, 0, 0)");

         expect(color.red).toBe(255);
      });

      it("should set the green to 100", function () {
         var color = new Color("rgba(0, 100, 0, 0)");

         expect(color.green).toBe(100);
      });

      it("should set the green to 255", function () {
         var color = new Color("rgba(0, 255, 0, 0)");

         expect(color.green).toBe(255);
      });

      it("should set the blue to 100", function () {
         var color = new Color("rgba(0, 0, 100, 0)");

         expect(color.blue).toBe(100);
      });

      it("should set the blue to 255", function () {
         var color = new Color("rgba(0, 0, 255, 0)");

         expect(color.blue).toBe(255);
      });

      it("should set the alpha to 0.5", function () {
         var color = new Color("rgba(0, 0, 0, 0.5)");

         expect(color.alpha).toBe(0.5);
      });

      it("should set the alpha to 1.0", function () {
         var color = new Color("rgba(0, 0, 0, 1.0)");

         expect(color.alpha).toBe(1.0);
      });

      it("should set the name to null if not provided", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         expect(color.name).toBe(null);
      });

      it("should set the name to something if provided", function () {
         var color = new Color("rgba(0, 0, 0, 0)", "something");

         expect(color.name).toBe("something");
      });

      it("should call the super function", function () {

         spyOn(Style, "call");

         var color = new Color("rgba(0, 0, 0, 0)");

         expect(Style.call).toHaveBeenCalledWith(color);
      });
   });

   describe("getting a Color", function () {
      it("should return rgba(1, 2, 3, 0.4)", function () {
         var color = new Color("rgba(1, 2, 3, 0.4)");

         expect(color.get()).toBe("rgba(1, 2, 3, 0.4)");
      });

      it("should return rgba(40, 30, 20, 1)", function () {
         var color = new Color("rgba(40, 30, 20, 1)");

         expect(color.get()).toBe("rgba(40, 30, 20, 1)");
      });
   });

   describe("setting a Color", function () {
      it("should set red to 100", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(100, 0, 0, 0)");

         expect(color.red).toBe(100);
      });

      it("should set red to 255", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(255, 0, 0, 0)");

         expect(color.red).toBe(255);
      });

      it("should set green to 100", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 100, 0, 0)");

         expect(color.green).toBe(100);
      });

      it("should set green to 255", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 255, 0, 0)");

         expect(color.green).toBe(255);
      });

      it("should set blue to 100", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 0, 100, 0)");

         expect(color.blue).toBe(100);
      });

      it("should set blue to 255", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 0, 255, 0)");

         expect(color.blue).toBe(255);
      });

      it("should set alpha to 0.5", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 0, 0, 0.5)");

         expect(color.alpha).toBe(0.5);
      });

      it("should set alpha to 1", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         color.set("rgba(0, 0, 0, 1)");

         expect(color.alpha).toBe(1);
      });

      it("should call notifyHandlers", function () {
         var color = new Color("rgba(0, 0, 0, 0)");

         spyOn(color, "notifyHandlers");

         color.set("rgba(0, 0, 0, 0)");

         expect(color.notifyHandlers).toHaveBeenCalled();
      });
   });
});*/
