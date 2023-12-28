/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
     let countVowels1 =0;
    let str1 = str.toLowerCase();
    const array=['a','e','i','o', 'u'];
    const array1 = str1.split("").sort();
    for(let i=0;i<array1.length;i++){
      let isVowel=false;
      for(let j=0; j<array.length;j++){
        if(array1[i]==array[j]){
          isVowel=true;
          break;
        }
       
        }
        if(isVowel){
          countVowels1++
        }
      }
      return countVowels1;
    }
 

console.log(countVowels('fhas'))
module.exports = countVowels;