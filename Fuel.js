const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let possibleDistance = mpg * fuelLeft
    if (possibleDistance >= distanceToPump){
      return true;
    } else {
      return false;
    }
  };