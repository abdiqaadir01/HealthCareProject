let image =document.getElementById('img')
let images=['bg_1.jpg','bg_2.jpg','bg_3.jpg']
setInterval(()=>{
    let random = Math.floor(Math.random()*3)
    image.src=images[random]
},800)
// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
  
