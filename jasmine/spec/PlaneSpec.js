'use strict';

describe("Plane", function(){

    var plane;
    var airport;


    beforeEach(function() {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport', ['clearForLanding']);
    });


    it('can land at airport', function(){
          plane.land(airport);
          expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

});



// //As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport
