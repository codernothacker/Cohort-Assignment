/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// let Array=[];
// for (let i=0;i<numbers.length;i=={
//     Array.push(numbers[i]);
// })

function findLargestElement(numbers) {
let largest=-Infinity;
    if(numbers.length!=0){
    for(let i=0;i<numbers.length;i++){
       if( numbers[i]>largest){
        largest=numbers[i];
       }
    }
    return largest;
}
else{
    return undefined;
}

}
console.log(findLargestElement([12,13,43,435]))

module.exports = findLargestElement;