'use strict';

describe("Feature Test", function() {

    var airport;
    var plane;

    beforeEach(function(){
      airport = new Airport();
      plane = new Plane();
    });


    it('planes can be instructed to land at an airport', function(){
        plane.land(airport);
        expect(airport.planes()).toContain(plane)
      });


});


//
//
// describe("Plane", function(){
//
//     var plane;
//
//
//     beforeEach(function() {
//       plane = new Plane();
//     });
//
//     describe('should tell you if plane is landed or not', function(){
//         it ('returns plane status', function(){
//           expect(plane.landed).toEqual(false)
//         });
//     });
//
//
// });
