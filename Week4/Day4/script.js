let numberOfBeers = Number(prompt("How many beers?"));
let numberOfBeersToTakeAway = 1;

while (numberOfBeers > 0 && numberOfBeersToTakeAway <= numberOfBeers) {
  const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
  console.log(stanza);
  numberOfBeers = numberOfBeers - numberOfBeersToTakeAway;
  numberOfBeersToTakeAway = numberOfBeersToTakeAway + 1;
}

function makeStanza(num, counter) {
  const BottleorBottles = getBottleorBottles(num);
  const itOrThem = getItOrThem(counter);
  const stanza = `${num} ${BottleorBottles} of beer on the wall
${num} ${BottleorBottles} of beer
Take ${counter} down, pass ${itOrThem} around
${num - counter} ${getBottleorBottles(num - counter)} of beer on the wall`;
  return stanza;
}

function isPlural(num) {
  if (num > 1) {
    return true;
  } else {
    return false;
  }
}

function getBottleorBottles(num) {
  if (isPlural(num)) {
    return "bottles";
  } else {
    return "bottle";
  }
}

function getItOrThem(num) {
  if (isPlural(num)) {
    return "them";
  } else {
    return "it";
  }
}3