const grid = document.querySelector(".grid");

function randomColorValue() {
  return Math.random() * 256;
}

function createGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size ** 2; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.flexBasis = `calc(${100 / size}% - 4px)`;
    grid.appendChild(cell);
    cell.addEventListener('mouseenter', event => {
      event.target.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
      let newOpacity = parseFloat(getComputedStyle(event.target).getPropertyValue("opacity")) + 0.1;
      event.target.style.opacity = newOpacity;
    });
  }
}
createGrid(16);

const button = document.querySelector("button");
button.addEventListener('click', e => {
  rowSize = parseInt(prompt("no of elements in row: "));
  createGrid(rowSize);
});