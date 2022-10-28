const toogleNavBar = () => {
    var target = document.getElementById("nav-bar-items");
    if(target.style.display == "block"){
        target.style.display = "none";
    }else{
        target.style.display = "block";
    }
}

const openBookingForm = (clicked_destination) => {
    document.getElementById("locations").value = clicked_destination;
    document.getElementById("booking-travel-booking").style.display = "flex";
}
const closeBookingForm = () => {
    document.getElementById("booking-travel-booking").style.display = "none";
}

const openTravelDetails = (clicked_destination) => {
    document.getElementById("current-travel-item").innerText = clicked_destination;
    document.getElementById("show-travel-details").style.display = "flex";
}

const closeTravelDetails = () => {
    document.getElementById("show-travel-details").style.display = "none";
}

const getNextCards = (clickedid) => {
    if(clickedid == "close-second"){
        document.getElementById("adventure-card-container").style.display = "block";
        document.getElementById("adventure-card-containers").style.display = "none";
    }else{
        document.getElementById("adventure-card-container").style.display = "none";
        document.getElementById("adventure-card-containers").style.display = "block"; 
    }
}

// var images = ["images/slider1.jpg","images/slider2.jpg","images/slider3.jpg","images/slider4.jpg"];
// var timer = 5000;
// var i = 0;
// function imageSlider(){
//     if(i < images.length - 1){
//         i++;
//     }else{
//         i = 0;
//     }
//     document.getElementById("spear-background").setAttribute("src",images[i]);
//     setTimeout("imageSlider()",timer);
// }

// window.onload = imageSlider();



var sliders = document.querySelectorAll(".spear-background");
var offset = [...sliders];
var activeSlide = document.querySelector("[data-active]");
var i = 0;

function carouselSlider(){

    if(i < sliders.length - 1){
        i++;
    }else{
        i = 0;
    }
    offset.forEach(element => {
        element.removeAttribute("data-active");
    })
    // activeSlide.removeAttribute("data-active");
    offset[i].setAttribute("data-active","");
    console.log(i);
    setTimeout("carouselSlider()",5000);
}
window.onload = carouselSlider();

