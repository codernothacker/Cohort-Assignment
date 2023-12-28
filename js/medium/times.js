/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const currentDate = new Date();
    let startime= currentDate.getTime();
    function sum(n){
        let sum=0
       for(i=0;i<n;i++){
            sum+=i;
        }}
        sum(n);
      const endDate= new Date();
    let endtime= endDate.getTime();
    let totaltime= endtime-startime;
    return totaltime;
}
console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));

// const currentDate = new Date();
// console.log("Time in milliseconds since 1970:", currentDate.getTime());
