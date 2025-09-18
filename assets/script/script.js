// // Hamburger menu
// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");
// const links = document.querySelectorAll(".menu a");

// // Toggle menu with hamburger
// hamburger.addEventListener("click", function() {
//   menu.classList.toggle("active");
// });

// // Close menu when clicking any link
// links.forEach(link => {
//   link.addEventListener("click", function() {
//     menu.classList.remove("active");
//   });
// });

function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  if (!navbar.contains(event.target) && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
  }
});

const swiper = new Swiper('.testimonial-swiper', {
  loop: true,
  speed: 600,
  slidesPerView: 1,       // each slide uses its own width
  centeredSlides: false,        // active slide is centered
  spaceBetween: 30,            // spacing between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: false,           // prevents slide jump
});



$(document).ready(function() {
  $('.accordion-header').click(function() {
    // Close other sections
    $('.accordion-content').not($(this).next()).slideUp();
    $('.accordion-header').not($(this)).removeClass('active');

    // Toggle clicked section
    $(this).next('.accordion-content').slideToggle();
    $(this).toggleClass('active');
  });
});
