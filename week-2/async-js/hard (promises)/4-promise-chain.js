/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t){
    return new Promise(function(resolve){
       setTimeout(function(){
            resolve('hi')
       },t*1000)
    })
}
function wait2(t){
    return new Promise(function(resolve){
       setTimeout(function(){
            resolve('hi')
       },t*1000)
    })
}
function wait3(t){
    return new Promise(function(resolve){
       setTimeout(function(){
            resolve('hi')
       },t*1000)
    })
}

function calculateTime(t1,t2,t3){
    let start =new Date();
    return wait1(t1)
    .then(result1=>{
        console.log(result1);
        return wait2(t2);
    })
    .then(result2=>{
        console.log(result2);
        return wait3(t3);
    })
    .then(result3=>{
        console.log(result3);
        let end =new Date();
        return end -start;
    })
    .catch(error=>{
        console.log(error)
    })
}
calculateTime(1,2,3).then(timetaken=>{
        console.log(timetaken)
})
module.exports = calculateTime;
