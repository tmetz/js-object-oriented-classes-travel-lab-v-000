class Driver {
  constructor (name, dateString) {
    this.name = name;
    this.date = new Date(dateString);
  }

  startDate() {
    return this.date;
  }

  yearsExperienceFromBeginningOf(year) {
    return this.date.year - year;
  }

}
