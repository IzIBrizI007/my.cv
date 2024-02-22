$(function () {
  

  const toggleIcon = document.querySelector('.nav__light');
  toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('nav__light--dark')
    document.body.classList.toggle('dark')
  });

  let items = document.querySelectorAll('.work__card');

  items.forEach(item => {
    console.log(item);
    item.addEventListener("mousemove", itemsMove);

    function itemsMove(e) {
      
      this.onmouseleave = () => {
        Object.assign(this, {
          style: `
          --move-x:${0}deg;
          --move-y:${0}deg;
          `
        }); 
      };
      
      this.onmousemove = function () {
        x = item.getBoundingClientRect();
        Object.assign(this, {
          style: `
        --move-x:${(e.clientX - (x.x + (item.clientWidth / 2))) * 0.1}deg;
        --move-y:${(e.clientY - (x.y + (item.clientHeight / 2))) * -0.1}deg;
        `
        });
      }
    }
  });
  
  let overlay = document.querySelectorAll('.profession__overlay, .profession__box, .profession');

  letDo();

  function letDo() {
    for (let i = 0; i <= overlay.length - 1; i++) {
      console.log(overlay[i]);
      Object.assign(overlay[i], {
        style:
          `
          --widthWindow:${window.innerWidth / 2}px;
          --heightWindow:${window.innerHeight / 2}px;
        `
      }
    )}
  };

window.addEventListener('resize', (e) => {
  resizeWindow();
});

  function resizeWindow() {
  
  for (let i = 0; i <= overlay.length - 1; i++) {
      Object.assign(overlay[i], {
        style:
          `
          --widthWindow:${window.innerWidth / 2}px;
          --heightWindow:${window.innerHeight / 2}px;
        `
      }
    )}
  }

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger__line--active');
    $('body').toggleClass('lock');
    $('.burger-nav').toggleClass('burger-nav--active');
    $('.nav__list').toggleClass('nav__list--active');
    $('.nav__light').toggleClass('nav__light--active');
  });

  $window = $(window);
  $window.scroll(function () {
    $scrollPosition = $window.scrollTop();
    console.log($scrollPosition);
    if ($scrollPosition > 50) {
      $('.header').addClass('header__top--sticky');
    }
    else {
      $('.header').removeClass('header__top--sticky');
    }
  });
});