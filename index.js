let slider = document.querySelector('.slide')
let countMoving = 0 // make a count for transform css
let countSliders = 0 // make a count to condition
let sliders = document.querySelectorAll(".slide .item")



/* slider */
function sliderMoving(dir) {
    if(dir === "right" && countSliders < sliders.length - 1){
        countSliders++
        countMoving = countMoving - 33.3
        slider.style.transform = `translateX(${countMoving}%)`
    }
    if(dir === "left" &&countSliders != 0){
            countSliders--
            countMoving = countMoving + 33.3
            slider.style.transform = `translateX(${countMoving}%)`
    }
}