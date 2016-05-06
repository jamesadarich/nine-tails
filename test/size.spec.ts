import * as Tape from "tape";
import { Size, SizeType } from "../src/nine-tails";

Tape.test("Size", (test: Tape.Test) => {

  test.test("constructing a new Size", (test: Tape.Test) => {

    test.test("should set the value to 1", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Pixels);

      test.equal(1, size.value);

      test.end();
    });

    test.test("should set the value to 99", (test: Tape.Test) => {
      var size = new Size(99, SizeType.Pixels);

      test.equal(99, size.value);

      test.end();
    });

    test.test("should set the type to Pixels", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Pixels);

      test.equal(SizeType.Pixels, size.type);

      test.end();
    });

    test.test("should set the type to Percentage", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Percentage);

      test.equal(SizeType.Percentage, size.type);

      test.end();
    });
  });

  test.test("getting a size value", (test: Tape.Test) => {

    test.test("should return '1px'", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Pixels);

      test.equal("1px", size.get());

      test.end();
    });

    test.test("should return '99px'", (test: Tape.Test) => {
      var size = new Size(99, SizeType.Pixels);

      test.equal('99px', size.get());

      test.end();
    });

    test.test("should return '1%'", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Percentage);

      test.equal("1%", size.get());

      test.end();
    });

    test.test("should return '99%'", (test: Tape.Test) => {
      var size = new Size(99, SizeType.Percentage);

      test.equal("99%", size.get());

      test.end();
    });
  });

  test.test("setting a size", (test: Tape.Test) => {

    test.test("should set the value to 1", (test: Tape.Test) => {
      var size = new Size(0, SizeType.Pixels);

      size.set(1, SizeType.Pixels);

      test.equal(1, size.value);

      test.end();
    });

    test.test("should set the value to 99", (test: Tape.Test) => {
      var size = new Size(0, SizeType.Pixels);

      size.set(99, SizeType.Pixels);

      test.equal(99, size.value);

      test.end();
    });

    test.test("should set the type to Pixels", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Percentage);

      size.set(1, SizeType.Pixels);

      test.equal(SizeType.Pixels, size.type);

      test.end();
    });

    test.test("should set the type to Percentage", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Pixels);

      size.set(1, SizeType.Percentage);

      test.equal(SizeType.Percentage, size.type);

      test.end();
    });

    test.test("should keep the type Pixels if not input", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Pixels);

      size.set(1);

      test.equal(SizeType.Pixels, size.type);

      test.end();
    });

    test.test("should keep the type Percentage if not input", (test: Tape.Test) => {
      var size = new Size(1, SizeType.Percentage);

      size.set(1);

      test.equal(SizeType.Percentage, size.type);

      test.end();
    });
  });
});
