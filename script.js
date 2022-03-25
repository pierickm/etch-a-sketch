const container = document.querySelector('#container');

for(i=0;i<256;i++){
    let item = document.createElement('div');
    item.className = 'item';
    container.append(item);
};

const items = container.querySelectorAll('div');

items.forEach((item)=> {
    item.addEventListener('mouseenter',(e) => {
        item.classList.add('paint');
        e.stopPropagation();
    })
});

const clearButton = document.querySelector('button');
clearButton.addEventListener('click', ()=>{
    items.forEach((item)=> {
        item.classList.remove('paint');
    })
    let popUp = prompt('How many squares per side should the new grid be?', 16);
})

