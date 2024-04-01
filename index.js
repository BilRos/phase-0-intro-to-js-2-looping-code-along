// Code your solutions in this file
/*

//Using a for loop
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

//using a for loop with an array
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
wrapGifts(gifts);

*/



//Loops lab starts here

//Using the for loop
const writeCards = (["Charlie", "Samip", "Ali"], "birthday");
function wrapGifts(names, event){
    names= ["Charlie", "Samip", "Ali"]
    event="birthday"
  for (let i =0; i<names.length; i++ ){
    console.log (`Thank you ${names[i]} for the wonderful ${event} gift!`,)
  }
}

/*


// Example 1 of Using while loop
const gifts1 = ["teddy bear", "drone", "doll"];

function wrapGifts1(gifts1) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts1.length) {
    console.log(`Wrapped ${gifts1[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts1;
}

wrapGifts1(gifts1);


//Example 2 of using a while loop
function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  }

  // for loop VS while loop
  let countup = 0;
  while (countup < 10) {
    console.log(countup++);
  }

 
  for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  }
   */

  function countDown (number){
    number >= 0;
    while (number >= 0){
       console.log(number)
       --number;
    }

  }
countDown(50);