const reactionBox = document.getElementById('reaction-box');
const startButton = document.getElementById('start-button');
const result = document.getElementById('result');
const message = document.getElementById('message');

let startTime;
let timeout;

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  result.textContent = '';
  message.textContent = 'Wait for the box to turn green...';
  
  timeout = setTimeout(() => {
    reactionBox.style.display = 'block';
    reactionBox.style.backgroundColor = 'green';
    startTime = Date.now();
  }, Math.random() * 2000 + 1000); // Random time between 1 and 3 seconds
});

reactionBox.addEventListener('click', () => {
  const reactionTime = (Date.now() - startTime) / 1000;
  reactionBox.style.display = 'none';
  reactionBox.style.backgroundColor = 'red';
  message.textContent = '';
  result.textContent = `Your reaction time is ${reactionTime.toFixed(3)} seconds`;
  startButton.style.display = 'block';
  clearTimeout(timeout);
});
