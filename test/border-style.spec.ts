import * as Tape from "tape";
import { BorderStyle, BorderStyleType } from "../src/nine-tails";

Tape.test("BorderStyle", (test: Tape.Test) => {

  test.test("constructing a new BorderStyle", (test: Tape.Test) => {

    test.test("should set the type to Dashed", (test: Tape.Test) => {

      var borderStyle = new BorderStyle(BorderStyleType.Dashed);

      test.equal(borderStyle.type, BorderStyleType.Dashed);

      test.end();
    });

      test.test("should set the type to Solid", (test: Tape.Test) => {

        var borderStyle = new BorderStyle(BorderStyleType.Solid);

        test.equal(borderStyle.type, BorderStyleType.Solid);

        test.end();
      });
  });

  test.test("getting a BorderStyle", (test: Tape.Test) => {
     test.test("should return 'dashed' if type is Dashed", (test: Tape.Test) => {
        var borderStyle = new BorderStyle(BorderStyleType.Dashed);

        test.equal("dashed", borderStyle.get());

        test.end();
     });

     test.test("should return 'solid' if type is Solid", (test: Tape.Test) => {
        var borderStyle = new BorderStyle(BorderStyleType.Solid);

        test.equal("solid", borderStyle.get());

        test.end();
     });
  });

  test.test("setting a BorderStyle", (test: Tape.Test) => {
     test.test("should return 'dashed' if set to Dashed", (test: Tape.Test) => {

        var borderStyle = new BorderStyle(BorderStyleType.Solid);

        borderStyle.set(BorderStyleType.Dashed);

        test.equal("dashed", borderStyle.get());

        test.end();
     });

     test.test("should return 'solid' if set to Solid", (test: Tape.Test) => {
        var borderStyle = new BorderStyle(BorderStyleType.Dashed);

        borderStyle.set(BorderStyleType.Solid);

        test.equal("solid", borderStyle.get());

        test.end();
     });
  });
});
