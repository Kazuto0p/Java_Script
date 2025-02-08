function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
  console.log(LeapYear(2024));
