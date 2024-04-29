let grids = document.querySelector('.grids')

function con(){
    console.log('workded');
}

grids.addEventListener('click', con)

let grid = document.createElement('div');
grid.style.width  = '100px';
grid.style.height = '100px';
grid.style.backgroundColor = 'pink';
grid.innerHtml = 'hell';
grid.textContent = 'ehll';
grid.style.borderColor = "black";
grids.appendChild(grid)

const content = document.createElement('div');
content.textContent = resultMessage;
results.appendChild(content);