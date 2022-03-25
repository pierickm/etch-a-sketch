const container = document.querySelector('#container');

for(i=0;i<256;i++){
    let item = document.createElement('div');
    item.className = 'item';
    container.append(item);
};