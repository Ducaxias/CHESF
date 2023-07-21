const slider= document.querySelectorAll('.slider')
const btn_prev = document.getElementById('btn_anterior')
const btn_prox = document.getElementById('btn_próximo')

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0
    } else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1
    } else{
        currentSlide--
    }
    showSlider()
}

btn_prox.addEventListener('click', nextSlider)
btn_prev.addEventListener('click', prevSlider)

class MobileNavBar{
    constructor( menu, links, nav){
        this.mobileMenu = document.querySelector(menu);
        this.navList = document.querySelector(links);
        this.navLinks = document.querySelectorAll(nav);
        this.activeClass = "ativo"
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".menu",
    ".links",
    "nav ul li"
)

mobileNavBar.init();