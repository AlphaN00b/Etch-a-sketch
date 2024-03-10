const grid = document.querySelector("#Container");
const square = document.createElement("div");
const newGrid = document.querySelector("#newGrid");

generateGrid(16)

newGrid.onclick = function() {
    let squaresNum = Number(window.prompt("Enter a number between 1-100:"));
    grid.innerHTML = "";
    if (squaresNum > 100 || squaresNum <= 0) {
        window.alert("your number is outside the allowed range");
        generateGrid(16)
    }
    else {
        generateGrid(squaresNum)
    }
}

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
            square.style.width = `${512/dimensions}px`;
            square.style.height = `${512/dimensions}px`;   
            squareNumber ++;
        }
        collumns ++;    
    }
}


const squares = document.querySelectorAll(".square");
