const cont =[
  {
   photo:"images/1.jpg"
  },
  {
   photo:"images/2.jpg"
  },
  {
   photo:"images/3.jpg"
  },
  {
   photo:"images/4.jpg"
  },
  {
   photo:"images/5.jpg"
  },
]

const show = cont.map((p)=>{
    return `<div class= "slider">
    <img class="slider-img" src=${p.photo} />
    </div>`
})

let kidDiv = document.querySelector(".slidercontainer");
kidDiv.innerHTML = show

const thunb = cont.map((p)=>{
  return `<div class= "thumbslider">
  <img class="thumb-img" src=${p.photo} />
  </div>`
})

let thumbDiv = document.querySelector(".thumbnail");
thumbDiv.innerHTML = thunb

let sliders = document.querySelectorAll(".slider");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let thumbNail = document.querySelectorAll(".thumbnail");
let thumbing = document.querySelectorAll(".thumb-img");
let thumbNailSlider = document.querySelectorAll(".thumbslider");
let currentPosition = 0;
let thumbCount = 0;

function setThumbnail(){
for (let index = 0; index < thumbing.length; index++) {
  thumbing[index].style.opacity = "0.4";
}
  thumbCount++;
  if (thumbCount > thumbing.length) {
    thumbCount = 1;
  }
 thumbing[thumbCount - 1].style.opacity = "1"; 
}
function activateSlider(){
for (let index = 0; index < sliders.length; index++) {
sliders[index].style.transform = `translatex(-${currentPosition}00%)`;
}
currentPosition +=1;
if(currentPosition > sliders.length -1) {
  currentPosition = 0;
}
setThumbnail();
}
// setInterval(activateSlider, 3000);

leftBtn.addEventListener("click",()=>{
  currentPosition = currentPosition -1
  if (currentPosition < 1) {
   currentPosition = sliders.length; 
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translatex(-${currentPosition-1}00%)`;
    }
    setThumbnail();
});
rightBtn.addEventListener("click",()=>{
  currentPosition+= 1;
  if (currentPosition > sliders.length -1) {
   currentPosition = 0; 
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translatex(-${currentPosition}00%)`;
    }
    setThumbnail();
});

console.log(thumbNailSlider.length);
for (let index = 0; index < thumbNailSlider.length; index++) {

thumbNailSlider[index].addEventListener("click",()=>{
  currentPosition = index;
  thumbCount = index - 1
  // console.log(currentPosition);
  // console.log(index);
  activateSlider()
  setThumbnail()
})
  
}