const sketch = document.querySelector(".sketch");

createGrid(32);

function createGrid(length) {
  for (let i = 0; i < length; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= length; j++) {
      let cell = document.createElement("div");
      cell.className = "gridsquare";
      row.appendChild(cell);
    }
    sketch.appendChild(row);
  }
}

const gridSquare = document.querySelectorAll(".gridsquare");
console.log(gridSquare);
gridSquare.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    if (event.buttons === 1) {
      console.log(grid.id);
      grid.classList.add("grid-color");
    }
  });
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  myFunction();
});

function myFunction() {
  var elems = document.querySelectorAll(".grid-color");
  elems.forEach((item) => {
    item.classList.remove("grid-color");
  });
}
