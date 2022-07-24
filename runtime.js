//Step One

const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let extraLargeResultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let extraLargeResultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", extraLargeResultsInsert.preciseWords);
console.log("append", extraLargeResultsAppend.preciseWords);

// Tiny Array 
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let tinyArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyArrayResultsInsert = perf.stop();

console.log('Results for the tinyArray')
console.log("insert", tinyArrayResultsInsert.preciseWords);
console.log("append", tinyArrayResultsAppend.preciseWords);

//Small Array
perf.start();                     // Starts timer
doublerAppend(smallArray);
let smallArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallArrayResultsInsert = perf.stop();

console.log('Results for the smallArray')
console.log("insert", smallArrayResultsInsert.preciseWords);
console.log("append", smallArrayResultsAppend.preciseWords);

//Medium Array
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let mediumArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumArrayResultsInsert = perf.stop();

console.log('Results for the mediumArray')
console.log("insert", mediumArrayResultsInsert.preciseWords);
console.log("append", mediumArrayResultsAppend.preciseWords);

//Large Array
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let largeArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(extraLargeArray);
let largeArrayResultsInsert = perf.stop();

console.log('Results for the largeArray')
console.log("insert", largeArrayResultsInsert.preciseWords);
console.log("append", largeArrayResultsAppend.preciseWords);
//End Step One

//Step Two
//Problem One - Sum Zero
function addToZero() {
    const numArray = [1, 2, 3, -2];

    for (let i = 0; i < numArray.length; i++){
        for (let n = 0; n < numArray.length; n++){
            if (numArray[i] + numArray[n] === 0){
                return true;
            }
        }
    } return false;
}

//Run time is o(n^2)

//Problem Two - Unique Characters
const uniqueCharacters = (string = "") => {
    for (let i = 0; i < string.length; i++){
        const element = string[i];
        if (string.indexOf(element) !== string.lastIndexOf(element)){
            return false;
        }
    } return true;
}
//Run time = O(n)

//Problem Three - Pangram Sentence
const isPangram = (string) => {
    const lowerCaseStr = str.toLowerCase();
    const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabetArr.length; i++){
        if (lowerCaseStr.indexOf(alphabetArr[i]) < 0) {
            return false;
        }
    } return true;
}

// O(n) runtime 

//Problem Four - Longest Word
const findLongestWord = (arr) => {
    let wordArray = ["hi", "hello", "bye", "goodbye", "adios"]

    return wordArray.sort(function (a, b) {return b.length - a.length})[0].length} 
;

// O(1) runtime

