const adressBtn = document.querySelector('#adress-form') 
const adressClose = document.querySelector('#adress-close') 
// console.log(adressBtn)

adressBtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex"
})

adressClose.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "none"
})


//-------------------- slider -------------------------