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