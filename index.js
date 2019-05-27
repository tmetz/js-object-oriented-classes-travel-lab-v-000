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
      
    }
  }
}
