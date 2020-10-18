const gridContainer = document.querySelector(".gridContainer")
let size = 16;
let currentColor = 'black';

function makeGrid(size) {
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size ** 2); i++) {
        let cube = document.createElement('div');
        cube.setAttribute("class", "cube");
        cube.setAttribute("id", `${i}`);
        cube.addEventListener('mouseover', drawColor);
        gridContainer.appendChild(cube);
    }
}

makeGrid(size)

function clearGrid() {
    size = Number(prompt('How many rows would you like?</br>(The max is 100.)'))
    if (size <= 100) {
        let cubes = document.querySelectorAll(".cube")
        cubes.forEach(cube => cube.remove());
        makeGrid(size)
    } else {
        alert('!Grid size cannot exceed 100!')
    }
}


function drawBlack(e) {
    e.target.style.background = "black"
}

function drawRainbow(e) {
    let bgColor = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc']
    const cube = document.querySelector(".cube")
    e.target.style.background = bgColor[Math.floor(Math.random() * bgColor.length)];
}

function drawPencil(e) {
    e.target.style.background = "black"
    e.target.style.opacity -= '-0.1';

}

function setColor(color) {
    currentColor = color;
    let cubes = document.querySelectorAll(".cube")
    makeGrid(size);
    cubes.forEach(cube => cube.remove());
    if (currentColor === 'pencil') {
        cubes.forEach(cube => cube.style.opacity = 0)
    }
}

function drawColor(e) {

    if (currentColor === 'black') {
        drawBlack(e)
    } else if (currentColor === 'rainbow') {
        drawRainbow(e)
    } else if (currentColor === 'pencil') {
        drawPencil(e)
    }
}