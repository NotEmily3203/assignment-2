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
            all_rows[j].appendChild(new_col);
        }
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}