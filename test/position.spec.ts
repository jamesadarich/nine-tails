import * as Tape from "tape";
import { PositionType } from "../src/position-type";
import { Position } from "../src/position";

Tape.test("Position", (test: Tape.Test) => {

  test.test("constructing a new Position", (test: Tape.Test) => {

    test.test("should set the PositionType to Fixed", (test: Tape.Test) => {

      var position = new Position(PositionType.Fixed);

      test.equal(position.type, PositionType.Fixed);

      test.end();
    });

      test.test("should set the PositionType to Absolute", (test: Tape.Test) => {

        var position = new Position(PositionType.Absolute);

        test.equal(position.type, PositionType.Absolute);

        test.end();
      });
  });

    test.test("getting an PositionType", (test: Tape.Test) => {

      test.test("PositionType.Fixed should return 'fixed'", (test: Tape.Test) => {

        var position = new Position(PositionType.Fixed);

        test.equal(position.get(), "fixed");

        test.end();
      });

        test.test("PositionType.Absolute should return 'absolute'", (test: Tape.Test) => {

          var position = new Position(PositionType.Absolute);

          test.equal(position.get(), "absolute");

          test.end();
        });
    });

    test.test("setting an PositionType", (test: Tape.Test) => {

      test.test("PositionType.Fixed should return 'fixed'", (test: Tape.Test) => {

        var position = new Position(PositionType.Absolute);

        position.set(PositionType.Fixed);

        test.equal(position.get(), "fixed");

        test.end();
      });

        test.test("PositionType.Absolute should return 'absolute'", (test: Tape.Test) => {

          var position = new Position(PositionType.Fixed);

          position.set(PositionType.Absolute);

          test.equal(position.get(), "absolute");

          test.end();
        });
    });
});
