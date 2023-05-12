// -------------- Scroll To Top ---------------
function scrollToTop () {
    window.scrollTo(0, 0)
}



// ------------------------
const adressBtn = document.querySelector('#adress-form');
const adressClose = document.querySelector('#adress-close');

// console.log(adressBtn)

adressBtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "flex";
})

adressClose.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "none";
})







// ----------------------- Slider ------------------------------
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
let index = 0;
// console.log(imgNumber.length)

rightBtn.addEventListener("click", function () {
    // console.log("oke")
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})

leftBtn.addEventListener("click", function () {
    index = index - 1
    if (index < 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})






// ------------------------ Slider li bottom click item ---------------------
const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li")
// console.log(imgNumberLi)

imgNumberLi.forEach(function (img, index) {
    img.addEventListener('click', function () {
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







//  ------------------------------ Slider auto slide --------------------------
function imgAuto() {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    removeActive();
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    imgNumberLi[index].classList.add('active')
    // console.log(index)
}
setInterval(imgAuto, 5000)


// ------------------------- Slider Product flash sale ----------------------------------
const rightBtnProFLS = document.querySelector(".fa-chevron-right-FLS-js");
const leftBtnProFLS = document.querySelector(".fa-chevron-left-FLS-js");
const imgNumberProFLS = document.querySelectorAll(".slider-product-flashSale-one-content-items");

rightBtnProFLS.addEventListener("click", function () {
    // console.log("oke")
    index = index + 1;
    if (index > imgNumberProFLS.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-product-flashSale-one-content-items-content").style.right = index * 100 + "%";
})

leftBtnProFLS.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumberProFLS.length - 1;
    }
    document.querySelector(".slider-product-flashSale-one-content-items-content").style.right = index * 100 + "%";
})





// ------------------------- Slider Product ----------------------------------
const rightBtnPro = document.querySelector(".fa-chevron-right-Pro");
const leftBtnPro = document.querySelector(".fa-chevron-left-Pro");
const imgNumberPro = document.querySelectorAll(".slider-product-one-content-items");

rightBtnPro.addEventListener("click", function () {
    // console.log("oke")
    index = index + 1;
    if (index > imgNumberPro.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
})

leftBtnPro.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumberPro.length - 1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
})

// ------------------------- Slider Product 2----------------------------------
const rightBtnPro2 = document.querySelector(".fa-chevron-right-Pro2");
const leftBtnPro2 = document.querySelector(".fa-chevron-left-Pro2");
const imgNumberPro2 = document.querySelectorAll(".slider-product-two-content-items");

rightBtnPro2.addEventListener("click", function () {
    // console.log("oke")
    index = index + 1;
    if (index > imgNumberPro2.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-product-two-content-items-content").style.right = index * 100 + "%";
})

leftBtnPro2.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumberPro2.length - 1;
    }
    document.querySelector(".slider-product-two-content-items-content").style.right = index * 100 + "%";
})





// --------------------------- Slide Product Gallery 2 ----------------------
const rightBtnProGal = document.querySelector(".rightBtnProGal-js");
const leftBtnProGal = document.querySelector(".leftBtnProGal-js");
const imgNumberProGal = document.querySelectorAll(".product-gallery-two-content-left-bottom-items");

rightBtnProGal.addEventListener("click", function () {
    // console.log("oke")
    index = index + 1;
    if (index > imgNumberProGal.length - 1) {
        index = 0;
    }
    document.querySelector(".product-gallery-two-content-left-bottom-content").style.right = index * 100 + "%";
})

leftBtnProGal.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumberProGal.length - 1;
    }
    document.querySelector(".product-gallery-two-content-left-bottom-content").style.right = index * 100 + "%";
})




// The End Of The Date To Countdown To
// 1000 milliseconds = 1 Second
let countdownDate = new Date("Fri May 26 2023 00:32:57").getTime();
// console.log(countdownDate); 


let counter = setInterval(() => {

    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countdownDate - dateNow;

    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 /60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60  * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60  * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);


    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter)
    }

}, 1000);









// ----------------- Scroll animate -------------------

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const sectionElement = document.querySelector('section.img');
// const childElements = sectionElement.querySelectorAll('.text');
// childElements.forEach((el) => {
//     el.classList.add('hidden');
//     observer.observe(el);
// });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.remove('hidden');
//         } else {
//             entry.target.classList.add('hidden');
//         }
//     });
// });

// const sections = document.querySelectorAll('.container .img, .container . .text');
// sections.forEach((section) => {
//     observer.observe(section);
//     section.classList.add('hidden');
// });



// const observerProduct = new IntersectionObserver((entriesPRO) => {
//     entriesPRO.forEach((entryPro) => {
//         if (entryPro.isIntersecting) {
//             entryPro.target.classList.add('showRow');
//         } else {
//             entryPro.target.classList.remove('showRow');
//         }
//     });
// });

// const hiddenProGalle = document.querySelector('.product-gallery-content-product');
// const childElementsProduct = hiddenProGalle.querySelectorAll('.product-gallery-content-product-item');
// childElementsProduct.forEach((el) => {
//     el.classList.add('hiddenRow');
//     observerProduct.observe(el);
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


const observerRow = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry1)
        if(entry.isIntersecting) {
            entry.target.classList.add('showRow');
        } else {
            entry.target.classList.remove('showRow');
        }
    });
});

const hiddenElementsRow = document.querySelectorAll('.hiddenRow');
hiddenElementsRow.forEach((el) => observerRow.observe(el));