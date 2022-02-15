// Create grid of divs
const grid = document.getElementById('grid');

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