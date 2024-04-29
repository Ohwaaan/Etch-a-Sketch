let grids = document.querySelector('.grids')

function con(){
    console.log('workded');
}

grids.addEventListener('click', con)

for(let i =0;i<5;i++)
{
    let grid = document.createElement('div');
    grids.appendChild(grid).className = 'gridRow';
}

