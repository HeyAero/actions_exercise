function combineJourney(
  country,
  lengthOfFlight,
  destination,
  start = 'London'
) {
  return `I traveled from ${start} to ${country} and it took me ${lengthOfFlight} hours to arrive at ${destination}!`;
}

let output = combineJourney('America', 6, 'Florida');
console.log(output);
