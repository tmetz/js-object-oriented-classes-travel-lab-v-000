let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor (name, dateString) {
    this.name = name;
    this.startDate = new Date(dateString);
  }

  startDate() {
    return this.startDate;
  }

  yearsExperienceFromBeginningOf(year) {
    return  Number(year) - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;

    blocksTravelled() {
      let verticalBlocks = Number(this.endingLocation.vertical) - Number(this.beginningLocation.vertical);
      
    }
  }
}
