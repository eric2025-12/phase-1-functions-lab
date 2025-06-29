

// Function 1: Returns the number of blocks from Scuber HQ (42nd St)
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

// Function 2: Converts blocks from HQ to feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Function 3: Calculates the number of feet traveled between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function 4: Calculates fare price based on travel distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
