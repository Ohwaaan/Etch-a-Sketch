let grids = document.querySelector('.grids')

function con(){
    console.log('workded');
}

grids.addEventListener('click', con)

for(let i =0;i<6;i++)
{
    let grid = document.createElement('div');
    grids.appendChild(grid).className = 'gridRow';
    for( let  i=0;i<4;i++){
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
    }
}


