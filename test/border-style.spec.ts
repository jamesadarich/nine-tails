///<reference path="../typings/jasmine/jasmine.d.ts"/>
import { BorderStyle } from "../src/border-style";
import { BorderStyleType } from "../src/border-style-type";

describe("BorderStyle", function () {
   describe("constructing a new BorderStyle", function(){
      it("should set the type to Dashed", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Dashed);

         expect(borderStyle.type).toBe(BorderStyleType.Dashed);
      });

      it("should set the type to Solid", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Solid);

         expect(borderStyle.type).toBe(BorderStyleType.Solid);
      });

      it("should call the super function", function() {

         //spyOn(Style, "call");

         var borderStyle = new BorderStyle(BorderStyleType.Solid);

         //expect(Style.call).toHaveBeenCalledWith(borderStyle);
      });
   });

   describe("getting a BorderStyle", function(){
      it("should return 'dashed' if type is Dashed", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Dashed);

         expect(borderStyle.get()).toBe("dashed");
      });

      it("should return 'solid' if type is Solid", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Solid);

         expect(borderStyle.get()).toBe("solid");
      });
   });

   describe("setting a BorderStyle", function(){
      it("should set the type to Dashed", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Solid);

         borderStyle.set(BorderStyleType.Dashed);

         expect(borderStyle.type).toBe(BorderStyleType.Dashed);
      });

      it("should set the type to Solid", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Dashed);

         borderStyle.set(BorderStyleType.Solid);

         expect(borderStyle.type).toBe(BorderStyleType.Solid);
      });

      it("should call notifyHandlers", function() {
         var borderStyle = new BorderStyle(BorderStyleType.Solid);

         spyOn(borderStyle, "notifyHandlers");

         borderStyle.set(BorderStyleType.Dashed);

         expect(borderStyle.notifyHandlers).toHaveBeenCalled();
      });
   });
});
