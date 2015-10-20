/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/position.ts"/>
///<reference path="../src/position-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe('Position', function() {
   describe('constructing a new Position', function () {
       it('should set the PositionType to Fixed', function () {
          var position = new NineTails.Position(NineTails.PositionType.Fixed);

           expect(position.type).toBe(NineTails.PositionType.Fixed);
       });
     it('should set the PositionType to Absolute', function () {
        var position = new NineTails.Position(NineTails.PositionType.Absolute);

         expect(position.type).toBe(NineTails.PositionType.Absolute);
     });

      it('should call the super function', function () {

         spyOn(NineTails.Style, 'call');

        var position = new NineTails.Position(NineTails.PositionType.Absolute);

         expect(NineTails.Style.call).toHaveBeenCalledWith(position);
      });
   });

   describe('getting an PositionType', function() {
      it('should return fixed', function () {
         var position = new NineTails.Position(NineTails.PositionType.Fixed);

         expect(position.get()).toBe('fixed');
      });

         it('should return absolute', function () {
            var position = new NineTails.Position(NineTails.PositionType.Absolute);

            expect(position.get()).toBe('absolute');
         });
   });

   describe('setting an PositionType', function () {
      it('should set the type to Fixed', function() {

         var position = new NineTails.Position(NineTails.PositionType.Absolute);

         position.set(NineTails.PositionType.Fixed);

         expect(position.type).toBe(NineTails.PositionType.Fixed);
      });

      it('should set the type to Fixed', function() {

         var position = new NineTails.Position(NineTails.PositionType.Fixed);

         position.set(NineTails.PositionType.Absolute);

         expect(position.type).toBe(NineTails.PositionType.Absolute);
      });

      it('should call notifyHandlers', function() {

         var position = new NineTails.Position(NineTails.PositionType.Fixed);

         spyOn(position, 'notifyHandlers');

         position.set(NineTails.PositionType.Absolute);

         expect(position.notifyHandlers).toHaveBeenCalled();
      });
   });
});
