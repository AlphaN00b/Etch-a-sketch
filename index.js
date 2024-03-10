const grid = document.querySelector("#Container");
const square = document.createElement("div");

generateGrid(16)

function generateGrid(dimensions) {
    let collumns = 0;
    while (collumns < dimensions) {
        let squareNumber = 0;
        while(squareNumber < dimensions) {
            const square = document.createElement("div");
            grid.appendChild(square);
            square.classList.add("square");
            square.onmouseenter = function() {
                square.classList.add("black");
            }
            squareNumber ++;
        }
        collumns ++;    
    }
}


const squares = document.querySelectorAll(".square");
