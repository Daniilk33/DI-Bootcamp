let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
console.log(pets[1]);
pets.push('horse');
pets = pets.filter(pet => pet !== 'rabbit');
console.log(pets.length)