createGrid;
createPrompt;
start;
deleteNodes;

let grids = document.querySelector('.grids');
let gridButton = document.querySelector('.gridButton');
let amountOfGrids;

gridButton.addEventListener('click', start);

function createGrid(){

    if(grids.firstChild)
        deleteNodes();

    for(let i =0;i<amountOfGrids;i++)
    {
        let grid = document.createElement('div');
        grids.appendChild(grid).className = 'gridRow';
        for( let  i=0;i<amountOfGrids;i++){
            let cell = document.createElement('div');
            grid.appendChild(cell).className = 'cell';
            cell.querySelector('cell');
            cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'red')
        }
    };
}

function createPrompt(){
    amountOfGrids = prompt('Enter amount of grids!');
    while(amountOfGrids > 100 || amountOfGrids < 0 || isNaN(amountOfGrids))
        amountOfGrids = prompt('Enter a number between 0 and 100');
}

function start(){
    createPrompt();
    createGrid();
}

function deleteNodes(){
    while (grids.firstChild){
        grids.removeChild(grids.firstChild);
    }
}
