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

 Airport.prototype.clearForTakeoff = function(plane){
   if (this.isStormy()) {
     throw new Error('Stormy');
   }
      this.hangar.pop(plane)
 }

 Airport.prototype.isStormy = function() {
      return false;
 }
