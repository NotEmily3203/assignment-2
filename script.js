// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows+=1;
    let grid = document.getElementById("grid");
    if(numCols == 0){
        numCols+=1;
    }
    let new_row = document.createElement("tr");
    for(let j = 0; j<numCols; j++){
        //idk why this has to be in the for loop for it to work correctly
        let new_col = document.createElement("td");
        new_col.onclick = function() {new_col.style.backgroundColor=colorSelected};
        new_row.appendChild(new_col);
    }
    grid.appendChild(new_row);
}

// Add a column
function addC() {
    numCols+=1;
    if(numRows==0){
        addR();
    }else{
        let all_rows =  document.getElementsByTagName('tr');
        for(let j = 0; j<numRows; j++){
            //idk why this has to be in the for loop for it to work correctly
            let new_col = document.createElement('td');
            new_col.onclick = function() {new_col.style.backgroundColor=colorSelected};
            all_rows[j].appendChild(new_col);
        }
    }
}

// Remove a row
function removeR() {
    if(numRows!=0){
        numRows-=1;
        let grid = document.getElementById("grid");
        let row = grid.querySelector("tr");
        grid.removeChild(row);
        if(numRows==0){
            numCols=0;
        }
    }
}

// Remove a column
function removeC() {
    if(numCols!=0){
        numCols-=1;
        let all_rows =  document.getElementsByTagName('tr');
        for(let j = 0; j<numRows; j++){
            let col = all_rows[j].querySelector("td");
            all_rows[j].removeChild(col);
        }
        if(numCols==0){
            numRows=0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let all_rows =  document.getElementsByTagName('tr');
    for(let i = 0; i<numRows; i++){
        let curr_row = all_rows[i];
        let each_col = curr_row.getElementsByTagName('td');
        for(let j = 0; j<numCols; j++){
            console.log(each_col[j].getAttribute("style"));
            if(each_col[j].getAttribute("style") == null || each_col[j].style.backgroundColor=="white"){
                each_col[j].style.backgroundColor=colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let all_rows =  document.getElementsByTagName('tr');
    for(let i = 0; i<numRows; i++){
        let curr_row = all_rows[i];
        let each_col = curr_row.getElementsByTagName('td');
        for(let j = 0; j<numCols; j++){
            each_col[j].style.backgroundColor=colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let all_rows =  document.getElementsByTagName('tr');
    for(let i = 0; i<numRows; i++){
        let curr_row = all_rows[i];
        let each_col = curr_row.getElementsByTagName('td');
        for(let j = 0; j<numCols; j++){
            each_col[j].style.backgroundColor="white";
        }
    }
}