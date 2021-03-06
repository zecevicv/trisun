/* #Header
  ======================================================= */
// Color Change
const header = document.querySelector('.header');

if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Hamburger
  ======================================================= */
const headerBtn = document.querySelector('.header-hamburger');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
});

/* #Clients Logo Slider
  ======================================================= */
if (document.querySelector('.clients .swiper')) {
  new Swiper(".clients .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      }
    }
  });
}

/* #Category Slider
  ======================================================= */
if (document.querySelector('.category-slider .swiper')) {
  new Swiper(".category-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        allowTouchMove: true,
        loop: true,
        centeredSlides: true
      },
      1024: {
        slidesPerView: 4,
        allowTouchMove: false,
        loop: false,
        centeredSlides: false
      }
    },
    navigation: {
      nextEl: ".category-slider .next",
      prevEl: ".category-slider .prev",
    },
  });
}

/* #Product Slider
  ======================================================= */
if (document.querySelector('.product-slider .swiper')) {
  new Swiper(".product-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      }
    },
    navigation: {
      nextEl: ".product-slider .next",
      prevEl: ".product-slider .prev",
    },
  });
}