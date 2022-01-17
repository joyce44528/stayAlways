
// 計時器

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}


// banner slider

const slider = function() {

    function bannerSlider() {

        const slides = document.querySelectorAll('.slide');
        console.log(slides);
        const nextBtn = document.querySelector('.next-btn');

        let curSlide = 0;
        let maxlength = slides.length;

        // text datas

        let textData = [
            ['美好的日常','讓 Stay Always 與你同行','時光流動，美麗依舊'],
            ['迎向2022','乾燥花帶給你新的開始','新年系列新上市!'],
            ['你對乾燥花了解多少呢?','乾燥花知識小測驗','快來玩玩領取折價券吧'],
            ['病毒肆虐','讓乾燥花陪你一起進行','疫情下的美好思索'],
            ['自製乾燥花','乾燥花的製作可以很簡單!']
        ]


        const autoPlay = () => nextSlide();
        let s_timer = new Timer(autoPlay,5000);

        const goSlide = () => {
            slides.forEach( slide => slide.style.transform = `translateX(${-100 *  curSlide}%)`)

        }

        goSlide();

        const slideText = () => {
            const sliderDeco = document.querySelector('.slider-decoration');

            sliderDeco.innerHTML = `
            <p class="slide-text">
                ${textData[curSlide].map(txt => {
                    return `
                    <span>${txt}</span>
                    <br>     `
                }).join('')}
            </p> `;

        }

        slideText();


        const timerPage = () => {
            const timerSpan = document.querySelector('.slider-timer span');
            timerSpan.textContent = `0${curSlide + 1}`;
        }

        timerPage();

        function nextSlide() {
            curSlide < maxlength - 1 ? curSlide++ : curSlide = 0;
            goSlide();
            s_timer.reset(5000); 
            setTimeout(timerPage,1000);
            setTimeout(slideText,1500);
        }

       

        nextBtn.addEventListener('click',nextSlide);
    }
    
    bannerSlider();

    const dragSlide = function() {

        const infoList = document.querySelector('.info-list');
    
        let clicked = false;
        let startX;
        let xoffest;
    
    
        const end = () => {
            clicked = false;
            
        }
    
        const start = (e) => {
            clicked = true;
            startX = e.pageX || e.touches[0].pageX - infoList.offsetLeft;
            xoffest = infoList.scrollLeft;	
        }
    
        const move = (e) => {
            if(!clicked) return;
            
          e.preventDefault();
          const x = e.pageX || e.touches[0].pageX - infoList.offsetLeft;
          const dist = (x - startX);
          infoList.scrollLeft = xoffest - dist;
        }
    
        
        infoList.addEventListener('mousedown', start);
        infoList.addEventListener('touchstart', start);
    
        infoList.addEventListener('mousemove', move);
        infoList.addEventListener('touchmove', move);
    
        infoList.addEventListener('mouseleave', end);
        infoList.addEventListener('mouseup', end);
        infoList.addEventListener('touchend', end);
        
    }

    dragSlide();
}

window.addEventListener('load',slider);


