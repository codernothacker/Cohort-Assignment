/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("times up");
        }, t);
    });
}

function wait2(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('time khatam');
        }, t);
    });
}

function wait3(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('time nahi hai');
        }, t);
    });
}


function calculateTime(t1, t2, t3) {
    let start = new Date();

    // Use Promise.all to wait for all promises to resolve
    return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)])
        .then(() => {
            let end = new Date();
            return (end - start); // Return the time taken in milliseconds
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Example usage
// calculateTime(1000, 2000, 3000)
//     .then((timeTaken) => {
//         return timeTaken
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

module.exports = calculateTime;
