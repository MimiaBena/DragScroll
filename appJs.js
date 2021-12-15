const contentSection = document.querySelector(".content");


function createItem(){
    for(let i = 0; i < 7; ++i) {
    const item = document.createElement('div');
    item.classList.add('post');
    item.style.backgroundColor = 'blue';  
    contentSection.append(item);   
}
}
createItem();

let isDown = false;
let startX;
let scrollLeft;
contentSection.addEventListener('mousedown', (e) =>
 {
    isDown= true;
    contentSection.style.cursor = 'grabbing';
    startX = e.pageX - contentSection.offsetLeft;
    scrollLeft = contentSection.scrollLeft;
    
});

contentSection.addEventListener('mouseleave', () =>
{
    isDown= false;
});

contentSection.addEventListener('mouseup', () => {
    isDown = false;
  });
  contentSection.addEventListener('mousemove', (e) => {
    if(!isDown) 
      return;
    e.preventDefault();
    const x = e.pageX - contentSection.offsetLeft;
    contentSection.scrollLeft = scrollLeft + ((startX - x) * 3);
  });