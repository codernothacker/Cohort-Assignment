/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p =new Promise(function(resolve){
        setTimeout(() => {
           resolve('times up')
           
        }, n);
    })
}
wait(10000)
.then


module.exports = wait;
