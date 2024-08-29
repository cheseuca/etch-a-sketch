const container = document.querySelector('.container');

// Create initial grid
function createGrid(size) {
    const squareSize = 960 / size + 'px';

    for (let i = 0; i < size * size; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = squareSize;
        content.style.height = squareSize;
        container.appendChild(content);
    }
}

// Change color on mouseover
function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Add event listeners to grid divs
function addEventListeners() {
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', changeColor);
    });
}

// Reset grid
function resetGrid() {
    const newSize = prompt('Enter new grid size (e.g., 16 for a 16x16 grid):');

    if (newSize > 2 && newSize <= 100) {
        // Remove existing grid
        container.innerHTML = '';

        // Create new grid
        createGrid(newSize);
        addEventListeners();
    } else if (newSize > 100) {
        alert('Grid size must be less than or equal to 100');
    } else {
        alert('Grid size must be greater than 1. Enter a valid number');
    }
}

// Create initial grid
createGrid(16);

// Add event listeners to initial grid
addEventListeners();

// Reset grid on button click
const button = document.querySelector('button');
button.addEventListener('click', resetGrid);

window.scrollTo(0, 0);