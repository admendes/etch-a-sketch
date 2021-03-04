const container = document.getElementById("container");
let currentSize = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};

function changeColor(cell) {
    cell.target.style.backgroundColor = "red";
}

function refreshPage() {
    window.location.reload();
}

function newBoard() {
    let size = prompt("Please enter a number between 1 and 64", "Grid size");
    if (size > 0 && size < 65) {
        currentSize = size;
        clearGrid();
        makeRows(currentSize, currentSize);
    }
    else {
        alert("Please enter a number between 1 and 64!");
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function reset() {
    clearGrid();
    makeRows(currentSize, currentSize);
}


makeRows(currentSize, currentSize);