// Create grid of divs

function genDivs(num){ 
    let e = document.body; // whatever you want to append the rows to: 
    for(i = 0; i < num; i++){ 
      let row = document.createElement("div"); 
      row.className = "row"; 
      for(x = 1; x <= num; x++){ 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.innerText = (i * num) + x;
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 
}