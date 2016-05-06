import * as Tape from "tape";
import { OverflowType } from "../src/overflow-type";
import { Overflow } from "../src/overflow";

Tape.test("Overflow", (test: Tape.Test) => {

  test.test("constructing a new Overflow", (test: Tape.Test) => {

    test.test("should set the OverflowType to Auto", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Auto);

      test.equal(overflow.type, OverflowType.Auto);

      test.end();
    });

    test.test("should set the OverflowType to Hidden", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Hidden);

      test.equal(overflow.type, OverflowType.Hidden);

      test.end();
    });

    test.test("should set the OverflowType to Inherit", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Inherit);

      test.equal(overflow.type, OverflowType.Inherit);

      test.end();
    });

    test.test("should set the OverflowType to Initial", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Initial);

      test.equal(overflow.type, OverflowType.Initial);

      test.end();
    });

    test.test("should set the OverflowType to Overlay", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Overlay);

      test.equal(overflow.type, OverflowType.Overlay);

      test.end();
    });

    test.test("should set the OverflowType to Scroll", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Scroll);

      test.equal(overflow.type, OverflowType.Scroll);

      test.end();
    });

    test.test("should set the OverflowType to Visible", (test: Tape.Test) => {

      var overflow = new Overflow(OverflowType.Visible);

      test.equal(overflow.type, OverflowType.Visible);

      test.end();
    });
  });

    test.test("getting an OverflowType", (test: Tape.Test) => {

      test.test("OverflowType.Auto should return 'auto'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        test.equal(overflow.get(), "auto");

        test.end();
      });

      test.test("OverflowType.Hidden should return 'hidden'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Hidden);

        test.equal(overflow.get(), "hidden");

        test.end();
      });

      test.test("OverflowType.Inherit should return 'inherit'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Inherit);

        test.equal(overflow.get(), "inherit");

        test.end();
      });

      test.test("OverflowType.Initial should return 'initial'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Initial);

        test.equal(overflow.get(), "initial");

        test.end();
      });

      test.test("OverflowType.Overlay should return 'overlay'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Overlay);

        test.equal(overflow.get(), "overlay");

        test.end();
      });

      test.test("OverflowType.Scroll should return 'scroll'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Scroll);

        test.equal(overflow.get(), "scroll");

        test.end();
      });

      test.test("OverflowType.Visible should return 'visible'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Visible);

        test.equal(overflow.get(), "visible");

        test.end();
      });
    });

    test.test("setting an OverflowType", (test: Tape.Test) => {

      test.test("OverflowType.Auto should return 'auto'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Visible);

        overflow.set(OverflowType.Auto);

        test.equal(overflow.get(), "auto");

        test.end();
      });

      test.test("OverflowType.Hidden should return 'hidden'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Hidden);

        test.equal(overflow.get(), "hidden");

        test.end();
      });

      test.test("OverflowType.Inherit should return 'inherit'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Inherit);

        test.equal(overflow.get(), "inherit");

        test.end();
      });

      test.test("OverflowType.Initial should return 'initial'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Initial);

        test.equal(overflow.get(), "initial");

        test.end();
      });

      test.test("OverflowType.Overlay should return 'overlay'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Overlay);

        test.equal(overflow.get(), "overlay");

        test.end();
      });

      test.test("OverflowType.Scroll should return 'scroll'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Scroll);

        test.equal(overflow.get(), "scroll");

        test.end();
      });

      test.test("OverflowType.Visible should return 'visible'", (test: Tape.Test) => {

        var overflow = new Overflow(OverflowType.Auto);

        overflow.set(OverflowType.Visible);

        test.equal(overflow.get(), "visible");

        test.end();
      });
    });
});
