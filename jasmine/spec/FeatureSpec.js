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
        expect(airport.planes()).toContain(plane);
      });

    it('planes can be instructed to take-off from an airport', function(){
        plane.land(airport)
        plane.takeoff(airport);
        expect(airport.planes()).not.toContain(plane);
    });

    it('blocks take off if weather is stormy', function(){
        plane.land(airport)
        spyOn(airport, 'isStormy').and.returnValue(true);
        expect(function(){airport.clearForTakeoff(plane);}).toThrowError('Stormy');
        expect(airport.planes()).toContain(plane);
    });
});

//
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
