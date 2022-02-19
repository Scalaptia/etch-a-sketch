const grid = document.getElementById('grid');
let slider = document.querySelector('input');  // Row Length
let length = parseInt(slider.value);
let lengthValue = document.querySelector('.grid-size');
let cellSize = grid.clientWidth / length;  // Make cell size relative to row length

// Create grid of divs //
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

// Delete grid divs and create new div //
function clearGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      genDivs(length);
    }

// Mode picker //
let mode = 'white';
const white = document.querySelector('.white');
const rainbow = document.querySelector('.rainbow');

// Update 'mode' on button click event
white.addEventListener('click', (event) => {
  mode = 'white';
})
rainbow.addEventListener('click', (event) => {
  mode = 'rainbow';
})

// Switch mode functionality
function changeColor(){
const randomR = Math.floor(Math.random() * 256)
const randomG = Math.floor(Math.random() * 256)
const randomB = Math.floor(Math.random() * 256)

  if (mode === 'white'){
    grid.addEventListener('mouseover', function (e) {
      if (e.target.matches('.gridsquare')) {
        e.target.style.backgroundColor = `white`;
      }
    });
  } else if(mode === 'rainbow'){
    grid.addEventListener('mouseover', function (e) {
      if (e.target.matches('.gridsquare')) {
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      }
    });
  } 
}
grid.addEventListener('mouseover', changeColor);

// Slider //
slider.addEventListener('input', function (e) {
    cellSize = e.target.value;                              //
    length = parseInt(slider.value);                        //  Auto-Update length values
    cellSize = grid.clientWidth / parseInt(slider.value);   // 
    lengthValue.textContent = `${length}x${length}`;
    clearGrid();
});

// Load on page start
genDivs(length);