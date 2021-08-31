// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////


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
*/
/*
// Coding Challenge 1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far
*/
/*
const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // 1:
  // const juliaCorrected = dogsJulia.slice(1, -2);
  // or
  const juliaCorrected = dogsJulia.slice();
  juliaCorrected.splice(0, 1);
  juliaCorrected.splice(-2);
  // console.log(juliaCorrected);
  // 2:
  const allDogs = [...juliaCorrected, ...dogsKate];
  // or
  // const allDogs = juliaCorrected.concat(dogsKate);
  console.log(allDogs);
  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy🐶, and is ${dog} years old`
      );
    }
  });
};

checkDogs(julia1, kate1);
checkDogs(julia2, kate2);
*/
/*
const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * euroToUsd);
console.log(movementsUsdFor);

const arrow = movements.map(mov => mov * euroToUsd);
console.log(arrow);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} €${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/
/*
// Filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawels = movements.filter(mov => mov < 0);
console.log(withdrawels);

// using a for of loop, we can't join/chain methods together with this
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);


// Reduce method

console.log(movements);
// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// by using for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
