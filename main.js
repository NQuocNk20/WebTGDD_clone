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