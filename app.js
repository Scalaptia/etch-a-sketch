const grid = document.getElementById('grid');
let slider = document.querySelector('input');  // Row Length
let length = parseInt(slider.value);
let lengthValue = document.querySelector('.grid-size');
let cellSize = grid.clientWidth / length;  // Make cell size relative to row length

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Create grid of divs
function genDivs(length){ 
    for(i = 0; i < length; i++){ 
      let row = document.createElement("div"); 
      row.className = "row"; 
      for(x = 1; x <= length; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare";
          cell.style.width = `${cellSize}px`;
          cell.style.height = `${cellSize}px`;
          row.appendChild(cell); 
      } 
      grid.appendChild(row);
    } 
}

// Delete grid divs and create new div
function clearGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      genDivs(length);
    }

// Hover effect on gridsquare
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.gridsquare')) {
      e.target.classList.add('gridhover');
    }
  });


// Slider
slider.addEventListener('input', function (e) {
    cellSize = e.target.value;                              //
    length = parseInt(slider.value);                        //  Auto-Update length values
    cellSize = grid.clientWidth / parseInt(slider.value);   // 
    lengthValue.textContent = `${length}x${length}`;
    clearGrid();
});

// Load on page start
genDivs(length);




