// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const account5 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account6 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account7 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account8 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accountsNew = [account5, account6, account7, account8];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accountPositive = [200, 450, 3000, 70, 1300];
const euroToUsd = 1.1;
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

// Coding Challenge 1 //

/*
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

// Coding Challenge 2 //

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(function (age) {
    if (age > 2) return 16 + age * 4;
    else return 2 * age;
  });
  const adultDogs = humanAges.filter(function (age) {
    return age >= 18;
  });
  const avgAdultDogAge = adultDogs.reduce(function (acc, age) {
    return acc + age / adultDogs.length;
  }, 0);

  return avgAdultDogAge;
};

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(data1, data2);
*/
/*
// The Chaining Method

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

// Coding Challenge 3 //

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:

§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/
/*
const calcAverageHumanAge = dogAges =>
  dogAges
    .filter(age => age > 2)
    .map(age => 16 + age * 4)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(data1, data2);
*/
/*
// The find method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
*/
/*
console.log(accounts);
const account = accounts.find(acc => acc.owner === `Jessica Davis`);

// Find statement as a For of loop
// let accForOf = '';
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') accForOf = acc;
// }
// console.log(`Hi ${accForOf.owner}`, accForOf);
console.log(account);
*/
/*
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Some Method: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);

// Every Method
console.log(movements.every(mov => mov > 0));
console.log(accountPositive.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// Flat by default goes 1 level deep we can change that
console.log(arrDeep.flat(2));

const accountMovements = accountsNew.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, num) => acc + num, 0);
console.log(overalBalance);

// Using chaining
const overalBalanceChain = accountsNew
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, num) => acc + num, 0);

console.log(overalBalanceChain);

// Using flatmap -- flatMap only goes 1 level deep
const overalBalanceChain2 = accountsNew
  .flatMap(acc => acc.movements)
  .reduce((acc, num) => acc + num, 0);

console.log(overalBalanceChain2);
*/
/*
// Sort method (mutates original array)

// Strings
const owners = ['Jonas', 'Brian', 'Emma', 'Aoibhínn'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); won't work as expected

// return < 0 - A before B (Keep order)
// return > 0 - B before A (switch order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Decending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty array + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); This doesn't work

// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // We could also spread the movements into an array
  // but we would have to map the result to get the value
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});
*/

// Array Method Practice //

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// Same as above but by using the reduce method
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalise(titleCase);
};
console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
