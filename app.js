const grid = document.getElementById('grid');
let length = 25;
let cellSize = grid.clientWidth / length;

genDivs(length);

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
function clearGrid (length) {
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


