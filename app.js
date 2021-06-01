const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
let squares;

makeGrid(16);

squares = document.querySelectorAll('#square');

clearBtn.addEventListener('click', function () {
    squares.forEach(square => square.style.backgroundColor = 'lightcyan');
})

sizeBtn.addEventListener('click', function () {
    const size = prompt('Please select a grid size (4-64)');
    squares.forEach(square => square.style.backgroundColor = 'lightcyan');
    makeGrid(size);
    squares = document.querySelectorAll('#square');
});

rainbowBtn.addEventListener('click', function () {
    squares.forEach(square => square.addEventListener('mouseover', function () {
        square.style.backgroundColor = makeRandColor();
    }));
});

function makeGrid(size) {
    if (size < 4 || size > 64) {
        return;
    } else {
        container.innerHTML = '';
        for (let i = 0; i < (size ** 2); i++) {
            const newDiv = document.createElement('div');
            newDiv.id = 'square';
            newDiv.classList.add('divStyles');
            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                newDiv.style.backgroundColor = 'black';
            });
        }
    }
}

function makeRandColor() {
    const random1 = Math.floor(Math.random() * 256);
    const random2 = Math.floor(Math.random() * 256);
    const random3 = Math.floor(Math.random() * 256);
    return `rgb(${random1}, ${random2}, ${random3})`;
}