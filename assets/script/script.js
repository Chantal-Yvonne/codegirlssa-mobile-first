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

// menu arrow
  document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const arrow = dropdown.querySelector(".drop-arrow");

    dropdown.addEventListener("click", function(e) {
      e.preventDefault(); // stop link from reloading page
      dropdown.classList.toggle("active");
      arrow.classList.toggle("rotate");
    });
  });



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

$(document).ready(function(){
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
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

  // form 
  
      // jQuery Validation rules
      $("#contactForm").validate({
        rules: {
          fullname: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          role: {
            required: true
          }
        },
        messages: {
          fullname: {
            required: "Please enter your name",
            minlength: "Name must be at least 3 characters"
          },
          email: {
            required: "Please enter your email",
            email: "Enter a valid email address"
          },
          role: {
            required: "Please select a option"
          }
        },
       
      });
    });

