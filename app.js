const grid = document.getElementById('grid');
let num = 16;

// Create grid of divs
function genDivs(num){ 
    for(i = 0; i < num; i++){ 
      let row = document.createElement("div"); 
      row.className = "row"; 
      for(x = 1; x <= num; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          row.appendChild(cell); 
      } 
      grid.appendChild(row);
    } 
}
genDivs(num);

// Delete grid divs and create new div
function clearGrid (num) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      genDivs(num);
    }

    
// Hover effect on gridsquare
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.gridsquare')) {
      e.target.classList.add('gridhover');
    }
  });