/*

// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

// Looping Arrays: forEach

const movementsNew = [200, 450, -400, 3000, -650, -130, 70, 1300];
// in for of loop index is always the first element
for (const [i, movement] of movementsNew.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1} You deposited €${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew €${Math.abs(movement)}`);
  }
}
console.log(`-----FOR EACH-----`);
// in forEach loop the element is the first parameter and 
//index second.
movementsNew.forEach(function(movement, i, arr) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited €${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew €${Math.abs(movement)}`);
  }
})
// you can not break out of a forEach loop, 
// it will just continue

// ForEach with maps and sets

const currenciesNew = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

//   Map
  currenciesNew.forEach(function(value, key, map) {
      console.log(`${key}: ${value}`);
  })

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
})
