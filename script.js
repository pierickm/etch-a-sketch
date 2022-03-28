const container = document.querySelector('#container');
const gridSize = document.getElementById('grid-size');
const resetButton = document.querySelector('button');


function createGrid () {
    for(i=0;i<=256;i++){
        let item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }
};


function changeGrid (){
    container.innerHTML= "";
    container.style.setProperty(
        "grid-template-columns", `repeat(${gridSize.value}, 1fr)`
    );
    container.style.setProperty(
        "grid-template-rows", `repeat(${gridSize.value}, 1fr)`
    );

    for (let i = 0; i < gridSize.value* gridSize.value; i++){
        let item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }
    console.log(gridSize.value);
};


const item = document.querySelector('div');
item.addEventListener("mouseover", function(event) {
    event.target.classList.replace("item", "paint");
});

gridSize.addEventListener("change", changeGrid);
  
resetButton.addEventListener('click', ()=>{
    container.innerHTML = "";
    gridSize.value="";
    container.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
});

createGrid();

