let activeNumber;
prevArrow = document.querySelector('.slider__arrow_prev')
nextArrow = document.querySelector('.slider__arrow_next')
sliders = Array.from(document.querySelectorAll('.slider__item'))
sliders.forEach((element, index) => {
    console.log(element.className)
    // if (element.className.incudes('slider__item_active')) activeNumber = index //Uncaught TypeError: element.className.incudes is not a function 
    if (element.className == 'slider__item slider__item_active') activeNumber = index
});

prevArrow.onclick = () => {
    sliders[activeNumber].className = 'slider__item'
    activeNumber = (activeNumber + 4) % 5
    sliders[activeNumber].className = 'slider__item slider__item_active'
}

nextArrow.onclick = () => {
    sliders[activeNumber].className = 'slider__item'
    activeNumber = (activeNumber + 1) % 5
    sliders[activeNumber].className = 'slider__item slider__item_active'
}