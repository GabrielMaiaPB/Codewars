function century(year) {
    let centuryNumber = year / 100;
    if (centuryNumber / Math.floor(centuryNumber) == 1){
      return centuryNumber;
    }
    else{
      return Math.ceil(centuryNumber);
    }
    
  }