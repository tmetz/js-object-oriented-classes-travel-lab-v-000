class Driver {
  constructor (name, dateString) {
    this.name = name;
    this.startDate = new Date(dateString);
  }

  startDate() {
    return this.startDate;
  }

  yearsExperienceFromBeginningOf(year) {
    return this.date.year - year;
  }

}
