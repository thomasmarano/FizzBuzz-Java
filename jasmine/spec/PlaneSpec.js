'use strict';

describe("Plane", function(){

    var plane;
    var airport;


    beforeEach(function() {
      plane = new Plane();
      airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
    });


    it('can land at airport', function(){
          plane.land(airport);
          expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('can takeoff from an airport', function(){
        plane.takeoff(airport)
        expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
    });
});
