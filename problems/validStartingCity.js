/*
  Imagine you have a set of cities that are laid out in a circle, connected by a
  circular road that runs clockwise. Each city has a gas station that provides
  gallons of fuel, and each city is some distance away from the next city.

  You have a car that can drive some number of miles per gallon of fuel, and
  your goal is to pick a starting city such that you can fill up your car with
  that city's fuel, drive to the next city, refill up your car with that city's
  fuel, drive to the next city, and so on and so forth until you return back to
  the starting city with 0 or more gallons of fuel left.

  This city is called a valid starting city, and it's guaranteed that there will
  always be exactly one valid starting city.

  For the actual problem, you'll be given an array of distances such that city
  i is distances[i] away from city i + 1.
  Since the cities are connected via a circular road, the last city is connected
  to the first city. In other words, the last distance in the
  distances array is equal to the distance from the last city to
  the first city. You'll also be given an array of fuel available at each city,
  where fuel[i] is equal to the fuel available at city
  i. The total amount of fuel available (from all cities combined)
  is exactly enough to travel to all cities. Your fuel tank always starts out
  empty, and you're given a positive integer value for the number of miles that
  your car can travel per gallon of fuel (miles per gallon, or MPG). You can
  assume that you will always be given at least two cities.

  Write a function that returns the index of the valid starting city.
  
  Sample Input
    distances = [5, 25, 15, 10, 15]
    fuel = [1, 2, 1, 0, 3]
    mpg = 10

  Sample Output
    4
*/

/*
  potentialCity is like a backup candidateCity
  if remainingMileage runs negative, potentialCity is the backup candidate
  potentialCity is assigned when the next netMileage is positive and no potentialCity yet
*/

function validStartingCity(distances, fuel, mpg) {
  let candidateCity = -1;
  let remainingMileage = 0;
  let potentialCity = null;
  let potentialMileage = 0;

  for (let i = 0; i < distances.length; i++) {
    const nextCityDistance = distances[i];
    const milageRefuled = fuel[i] * mpg;
    const netMileage = (milageRefuled - nextCityDistance);

    remainingMileage += netMileage;
    potentialMileage += netMileage;

    if (netMileage > 0 && !potentialCity) {
      potentialCity = i;
      potentialMileage = netMileage;
    } else if (potentialMileage < 0) {
      potentialCity = null;
      potentialMileage = netMileage;
    }

    if (remainingMileage < 0) {
      candidateCity = -1;
    } else if (candidateCity === -1) {
      candidateCity = i;
    }
  }

  return potentialCity && potentialMileage >= 0 ? potentialCity : candidateCity;
}

function validStartingCity2(distances, fuel, mpg) {
  let candidateCity = 0;
  let remainingMileage = 0;
  let remainingMileageAtCandidateCity = 0;

  for (let cityIdx = 1; cityIdx < distances.length; cityIdx++) {
    const distanceFromPrevCity = distances[cityIdx - 1];
    const milageFueledFromPrevCity = fuel[cityIdx - 1] * mpg;

    remainingMileage += milageFueledFromPrevCity - distanceFromPrevCity;

    if (remainingMileage < remainingMileageAtCandidateCity) {
      remainingMileageAtCandidateCity = remainingMileage;
      candidateCity = cityIdx;
    }
  }
  
  return candidateCity;
}

module.exports = validStartingCity;