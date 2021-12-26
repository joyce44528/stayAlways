const navBtn = document.querySelector('.nav-toggle');

const navToggle = (e) => {
    e.preventDefault();
    const navWrap = document.querySelector('.nav-wrap');
    navWrap.classList.toggle('nav-wrap--active');
}

navBtn.addEventListener('click',navToggle);