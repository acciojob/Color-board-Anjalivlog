//your JS code here. If required.
const container = document.querySelector('.container');
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
container.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.style.backgroundColor = randomColorFunction();
    setTimeout(() => {
      event.target.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  }
});

function randomColorFunction() {
    const r = Math.floor(Math.random() * 256); // Random between 0-255
    const g = Math.floor(Math.random() * 256); // Random between 0-255
    const b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')'; 
}   