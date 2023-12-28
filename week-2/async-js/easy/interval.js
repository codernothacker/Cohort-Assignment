let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter); // You can replace this line with your desired action
}

// Update the counter every 1000 milliseconds (1 second)
const intervalId = setInterval(updateCounter, 1000);

// If you want to stop the counter after a certain duration (e.g., 10 seconds), you can use setTimeout
const duration = 10000; // 10 seconds
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after the specified duration
  console.log('Counter stopped after 10 seconds.');
}, duration);
