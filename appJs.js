const contentSection = document.querySelector(".content");
const image = new Array("A.jpg", "B.jpg", "C.jpg", "D.jpg", "E.jpg", "F.jpg", "G.jpg");

for(let i = 0; i < 7; ++i) {
    console.log(image[i]);
}

function createItem(){
    for(let i = 0; i < 7; ++i) {
    const item = document.createElement('div');
    item.classList.add('post');
    item.style.backgroundColor = 'black';
    //const img = document.createElement('img');
    //img.src= 'lever-de-soleil.jpg';
     console.log(image[i]);
    item.style.backgroundImage ="url('" + image[i] + "')";
    //item.append(img);
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