// ASYNC BASICS EXERCISE
// 1
let name1 = "Sam Wilson";
function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}
function falcon(n) {
  setTimeout(() => {
    name1 = n;
  }, 1000);
}
falcon(`Sam Wilson`);
falconName();

// 2
let name2 = "Winter Soldier";
function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}
function winterSoldier(n) {
  setTimeout(() => {
    name2 = n;
  }, 2000);
}
winterSoldier(`Bucky Barnes`);
winterSoldierName();

// 3
let name3 = "Agent 13";
function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}
function agent13(n){
  setTimeout(() => {
    name3 = n;
  }, 3000);
}
agent13('Sharon Carter');
agent13Name();


/*
Complete the following in the JS file (You can either change the code or comment it out and write it again)...

1. Add a callback to the “falcon” function so the value of `Sam Wilson` will display in the terminal/console for the name1 variable when the falconName function is run.

2. Create a promise in the winterSoldier function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, consume the promise that is now returned from the winterSoldier function in a way that the value of `Bucky Barnes` will display in the terminal/console for the name2 variable when the winterSoldierName function is run.

3. Use a promise in the agent13 function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, use Async/Await so the value of `Sharon Carter` will display in the terminal/console for the name3 variable when the falconName function is run.

BONUS...
Paste the following after question 3 in your JS file...

// 4
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise')
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise')
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third Promise')
  }, 4000);
});

4. Use Promise.all to display the values set for p1, p2, and p3 in a single array in the console/terminal.








*/





