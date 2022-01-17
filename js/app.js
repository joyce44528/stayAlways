// loading animation
const loadingAni = () => {
    document.querySelector('.loading-wrapper').classList.add('hidden');
  }
  

  
  window.addEventListener('load',() => {
    setTimeout(loadingAni,5000);
    
}) 



// nav-toggle 主導覽頁的開合
const navBehavior = function() {
    const navBtn = document.querySelector('.nav-toggle');

    let openState = 0;

    const navToggle = (e) => {
        e.preventDefault();
        const navWrap = document.querySelector('.nav-wrap');
        const navLabelBg = document.querySelector('.nav-label--bg');
        const openFont = document.querySelector('.nav-font--open');
        const closeFont = document.querySelector('.nav-font--close');

        navWrap.classList.toggle('nav-wrap--active');

        openState = !openState;

        if(openState) {
            openFont.style.opacity = '0';
            closeFont.style.opacity = '1';
            navLabelBg.style.transform = 'scale(0)';
        }else {
            openFont.style.opacity = '1';
            closeFont.style.opacity = '0';
            navLabelBg.style.transform = 'scale(1)';
        }
        
        
    console.log(openState)
    }

    navBtn.addEventListener('click',navToggle);

    // 主導覽列mouseover的效果

    const menuDom = document.querySelector('.main-nav');
    const imgBoxes = document.querySelectorAll('.img-box');

    const imgInit = () => {
        const navActive = document.querySelector('.nav-li--active .nav-link');

        [...imgBoxes].forEach(box => box.classList.remove('img-box--active'));
        [...imgBoxes]
        .filter(box => box.dataset.id == navActive.dataset.id)
        .forEach(box => box.classList.add('img-box--active'));
    }

    imgInit();

    menuDom.addEventListener('mouseover', function(e) {
    if(!e.target.classList.contains('nav-link')) return;

    [...imgBoxes].forEach(box => box.classList.remove('img-box--active'));
    [...imgBoxes]
        .filter(box => box.dataset.id == e.target.dataset.id)
        .forEach(box => box.classList.add('img-box--active'));
    
    })

    menuDom.addEventListener('mouseleave', function(e) {
        console.log(e.target)
        if(e.target.classList.contains('nav-link')) return;
        imgInit();
    })

}




// new products
const horizontalScroll = () => {
    let newProduct = document.querySelector('.new-products');
    let productWrap = document.querySelector('.product-wrap');


    function calcHeight(ele) {
        const vw = window.innerWidth; 
        const vh = window.innerHeight;
        let vhUnit = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vhUnit}px`);
        console.log(ele.scrollWidth);
        return ele.scrollWidth -vw + vh + 200;

    }
    
    newProduct.style.height = `${calcHeight(productWrap)}px`;

    window.onscroll = () => {
        
        const stickyWrap = document.querySelector('.sticky-wrap');
        productWrap.style.transform = `translateX(-${stickyWrap.offsetTop}px)`;
       
    }

    window.addEventListener('resize', () => {
        newProduct.style.height = `${calcHeight(productWrap)}px`;

      });
}


window.onload = () => {
    navBehavior();
    horizontalScroll();
}


