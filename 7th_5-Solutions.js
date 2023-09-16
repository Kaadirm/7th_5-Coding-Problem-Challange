/*
------   1   -------
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


SOLUTION

function largestOfFour(arr) {
    let maxArr = [];
    for(let i=0; i < arr.length; i++){
       let biggestNum = arr[i];
       arr[i].reduce((a, b) => a > b ? biggestNum = a : biggestNum = b)
       maxArr.push(biggestNum)
    }
    return maxArr
}

------   2   -------

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

SOLUTION

function reverseString(str) {
  return str.split("").reverse().join("");
}

------   3   -------

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

SOLUTION

function factorialize(num) {
    let factorialResult = 1
    if(num > 1){
      for(let i=num; i>0; i--){
        factorialResult *= i
    }
  }  
  return factorialResult
}
/* function factorialize(num) {
    if(num < 0){
    return -1;
    } 
    else if(num === 0){
    return 1
    }
    else{
    return num * factorialize(num - 1)  
    }
}
*/

------   4   -------

Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

SOLUTION 

function findLongestWordLength(str) {
    const wordsArr = str.split(" ").sort((a, b)=> b.length - a.length)
    return wordsArr[0].length
}

------   5   -------

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 

But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

SOLUTION

function confirmEnding(str, target) {
    const testVar = new RegExp(target + "$", "i");
    return testVar.test(str);
}

*/