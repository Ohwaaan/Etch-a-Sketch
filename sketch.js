let grids = document.querySelector('.grids')

function con(){
    console.log('workded');
}

grids.addEventListener('clic', con)


for(let i =0;i<16;i++)
{
    let grid = document.createElement('div');
    grids.appendChild(grid).className = 'gridRow';
    for( let  i=0;i<16;i++){
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
        cell.querySelector('cell');
        cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'red')
    }
};

function changeColor(){
    cell.style.backgroundColor = 'red';
}

/*
let cell = document.querySelectorAll('.cell');
cell[1].style.backgroundColor='blue';
cell.addEventListener('click', con);

for */