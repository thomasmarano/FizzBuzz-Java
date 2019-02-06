function Airport() {
    this.hangar = [];
};

 //
 Airport.prototype.planes = function(plane) {
      return this.hangar;
 };

 Airport.prototype.clearForLanding = function(plane) {
      this.hangar.push(plane);
 }
