//your JS code here. If required.
const container = document.querySelector('.container');

// Generate 799 more square boxes
for (let i = 0; i < 799; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}