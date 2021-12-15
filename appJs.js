const contentSection = document.querySelector(".content");

function test(){
    for(let i = 0; i < 9; ++i) {
    const item = document.createElement('div');
    item.classList.add('post');
    item.style.backgroundColor = 'blue';
    
    
    contentSection.append(item);

    
}


}
test();