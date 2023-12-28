function wait1(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(`wait1 resolved after ${t} seconds`);
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(`wait2 resolved after ${t} seconds`);
        }, t * 1000);
    });
}

function wait3(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(`wait3 resolved after ${t} seconds`);
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    let start = new Date();

    // Use promise chaining for sequential execution
    return wait1(t1)
        .then(result1 => {
            console.log(result1);
            return wait2(t2);
        })
        .then(result2 => {
            console.log(result2);
            return wait3(t3);
        })
        .then(result3 => {
            console.log(result3);
            let end = new Date();
            return end - start; // Return the time taken in milliseconds
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the calculateTime function and log the time taken
calculateTime(2, 3, 1).then(timeTaken => {
    console.log('Total time taken:', timeTaken, 'milliseconds');
});
