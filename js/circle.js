
function circlePos() {

    let state = window.innerWidth < 768 ? 50 :  60;

    let pos = document.querySelector('.circle-wrap')
        .style.setProperty('--circlePos',`${state}%`);
    
    return pos;
    
}

const contentPos = function() {
    
   let state =  window.innerWidth < 768 ? 30 :  50;

    document.querySelector('.circle-content')
    .style.setProperty('--contentLeft',`${state}%`);

    return state;
}



function circleTransform() {


    let value = this.scrollY;
    document.querySelector('.circle-wrap')
        .style.clipPath = `circle(${120 + value}px at var(--circlePos) center)`;


    document.querySelector('.circle-content').style.left = ` ${contentPos() -  value / 20}%`;
    
}

window.addEventListener('load',circlePos);
window.addEventListener('load',contentPos);

window.addEventListener('resize',circlePos);
window.addEventListener('resize',contentPos);

window.addEventListener('scroll',circleTransform);

