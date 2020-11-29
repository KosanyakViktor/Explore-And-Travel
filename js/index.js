$('.menu-icon').click(function(){
    $(this).toggleClass('clicked');
    $('.menu-burger').toggleClass('active');
  });


// Animation Cards //
// const cards = document.querySelectorAll('.card');
// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];
//   cards.addEventListener('mousemove',rotate);
// }
 
// function rotate(event) {
//     const cardItem = this.querySelector('.card-item');
//     const halfHeight = cardItem.offsetHeight / 2;
//     cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 6+'deg) rotateY('+ (event.offsetX - halfHeight) / 5 + 'deg)';

// }
// Social links // 
const youtube = document.querySelector('.youtube');
const clickYouTube = function() {
  window.location.href = 'https://www.youtube.com/channel/UC9M-mTytT2q72gAjt9H_qwg'
};
youtube.addEventListener('click',clickYouTube);

const linkedin = document.querySelector('.in');
const clickIn = function() {
  window.location.href = 'https://www.linkedin.com/in/travel-explore-875b63179/const '
};
linkedin.addEventListener('click',clickIn);

const insta = document.querySelector('.inst');
const clickInsta = function() {
  window.location.href = 'https://www.instagram.com/ardentexplorer/?igshid=ojmqqz6bcllq'
};
insta.addEventListener('click',clickInsta);

const facebook = document.querySelector('.face');
const clickFacebook = function() {
  window.location.href = 'https://www.facebook.com/Explore-and-Travel-107857160612443'
};
facebook.addEventListener('click',clickFacebook);

const twitter = document.querySelector('.in');
const clickTwitter = function() {
  window.location.href = 'https://twitter.com/expatexplore';
};
twitter.addEventListener('click',clickTwitter);

// Slider Owl.Carousel.js // 
$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: false,
    dots: false,
    nav: true,
    navText: ['<span class="arrow-owl arrow-left"></span>','<span class="arrow-owl arrow-right"></span>']
  });
});
$(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});