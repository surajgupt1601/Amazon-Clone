const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n=0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block'
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if(n>0) {
        n--;
    }else{
        n = imgs.length -1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if(n < imgs.length -1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

//wheel scroller
const scrollContainer = document.querySelectorAll('.products');

for(const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

//back to top button 

const backtop = document.querySelector(".backtop");

backtop.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
})

//sidebar

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const cross = document.querySelector('.fa-xmark');
    const sidebtn = document.querySelector('#menu_icon');

    sidebtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        cross.classList.add('active');
    });
    cross.addEventListener('click', () =>{
        sidebar.classList.remove('active');
        cross.classList.remove('active');
    });
});





