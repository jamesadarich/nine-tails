/// <reference path="../src/nine-tails.ts"/>
///<reference path="../src/size.ts"/>
///<reference path="../src/size-type.ts"/>
///<reference path="../typings/jasmine/jasmine.d.ts"/>

describe('Size', function() {
   describe('constructing a new Size', function () {
      it('should set the value to 1', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Pixels);

         expect(size.value).toBe(1);
      });

      it('should set the value to 99', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Pixels);

         expect(size.value).toBe(99);
      });
      it('should set the type to Pixels', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Pixels);

         expect(size.type).toBe(NineTails.SizeType.Pixels);
      });

      it('should set the type to Percentage', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Percentage);

         expect(size.type).toBe(NineTails.SizeType.Percentage);
      });

      it('should call the super function', function () {
         spyOn(NineTails.Style, 'call');

         var size = new NineTails.Size(99, NineTails.SizeType.Percentage);

         expect(NineTails.Style.call).toHaveBeenCalledWith(size);
      });
   });

   describe('setting the size', function() {
      it('should set the value to 1', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Pixels);

         size.set(1);

         expect(size.value).toBe(1);
      });

      it('should the value to 99', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Pixels);

         size.set(99);

         expect(size.value).toBe(99);
      });

      it('should set the type to Pixels', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Percentage);

         size.set(99, NineTails.SizeType.Pixels);

         expect(size.type).toBe(NineTails.SizeType.Pixels);
      });

      it('should set the type to Percentage', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Pixels);

         size.set(99, NineTails.SizeType.Percentage);

         expect(size.type).toBe(NineTails.SizeType.Percentage);
      });

      it('should call notifyHandlers', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Percentage);

         spyOn(size, 'notifyHandlers');

         size.set(1);

         expect(size.notifyHandlers).toHaveBeenCalled();
      });
   });

   describe('getting the size', function() {
      it('should return "1px"', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Pixels);

         expect(size.get()).toBe("1px");
      });

      it('should return "99px"', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Pixels);

         expect(size.get()).toBe("99px");
      });

      it('should return "1%"', function () {
         var size = new NineTails.Size(1, NineTails.SizeType.Percentage);

         expect(size.get()).toBe("1%");
      });

      it('should return "99%"', function () {
         var size = new NineTails.Size(99, NineTails.SizeType.Percentage);

         expect(size.get()).toBe("99%");
      });
   });
});
