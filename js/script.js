// swiper js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "4",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});

//swiper array object
var slider =[
  {image:"./img/sf3.jpg",heading:"Food"},
  {image:"./img/sc1.jpg",heading:"Rent Cars"},
  {image:"./img/sd2.jpg",heading:"Docters"},
  {image:"./img/sf4.jpg",heading:"Food"},
  {image:"./img/sg.jpg",heading:"Gym"},
  {image:"./img/sr2.jpg",heading:"Room Cleaning"},
  {image:"./img/sw1.jpg",heading:"WIFI"},
  {image:"./img/sf5.jpg",heading:"Food"},
  {image:"./img/sf6.jpg",heading:"Food"},
];

var clutter1 = "";
slider.forEach((elem,idx)=>{
  clutter1 += `<div class="swiper-slide">
  <img id="${idx}" src="${elem.image}" />
  <h4>${elem.heading}</h4>
  </div>`
})

document.querySelector(".swiper-wrapper").innerHTML = clutter1;