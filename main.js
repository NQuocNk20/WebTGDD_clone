const adressBtn = document.querySelector('#adress-form'); 
const adressClose = document.querySelector('#adress-close'); 

// console.log(adressBtn)

adressBtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex";
})

adressClose.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "none";
})


// ------ Slider ------
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
let index = 0;
console.log(imgNumber.length)

rightBtn.addEventListener("click", function() {
    // console.log("oke")
    index = index+1;
    if(index > imgNumber.length-1) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})

leftBtn.addEventListener("click", function() {
    index = index-1
    if(index < 0) {
        index = imgNumber.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})


// ------ Slider li bottom click item --------
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li")
// console.log(imgNumberLi)

imgNumberLi.forEach(function(img, index) {
    img.addEventListener('click', function() {
        removeActive();
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        img.classList.add("active")
    })
})
function removeActive() {
    let imgActive = document.querySelector(".active");
    // console.log(imgActive)
    imgActive.classList.remove('active');
}


//  ------ Slider auto slide ---------
function imgAuto() {
    index = index + 1;
    if(index > imgNumber.length-1) {
        index = 0;
    }
    removeActive();
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    imgNumberLi[index].classList.add('active')
    // console.log(index)
}
setInterval(imgAuto, 5000)
