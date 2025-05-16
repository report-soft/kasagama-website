let mobileHead = document.querySelector(".span")
mobileHead.addEventListener("click", mobileHeader)

function mobileHeader(){
    let theElement = document.querySelector(".mobileHeader")
    theElement.classList.toggle("hidden")
}

//Hamburger Transition//
let menuTransition = document.querySelector(".span")
menuTransition.addEventListener("click", )

function menuTrans(){
let Menu1 = document.querySelector(".menu1")
let Menu2 = document.querySelector(".menu1")
let Menu3 = document.querySelector(".menu1")
Menu2.style.display = "none"
Menu1.style.transition = "rotate(90 deg)"
Menu3.style.transition = "rotate(90 deg)"
}