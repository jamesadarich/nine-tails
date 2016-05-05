import * as Tape from "tape";
import { BorderStyle, BorderStyleType } from "../src/nine-tails";

Tape.test("BorderStyle", (test: any) => {

  test.test("constructing a new BorderStyle", (test: any) => {

    test.test("should set the type to Dashed", (test: any) => {

      var borderStyle = new BorderStyle(BorderStyleType.Dashed);

      test.equal(borderStyle.type, BorderStyleType.Dashed);

      test.end();
    });

      test.test("should set the type to Solid", (test: any) => {

        var borderStyle = new BorderStyle(BorderStyleType.Solid);

        test.equal(borderStyle.type, BorderStyleType.Solid);

        test.end();
      });
  });
});

/*
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
});*/
