document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuCloseBtn = menu.querySelector('.menu__close-btn');
  const menuLinks = menu.querySelectorAll('.menu__link');

  menuCloseBtn.addEventListener('click', () => {
    menu.style.top = '-600%';
  });

  for (const link of menuLinks) {
    link.addEventListener('click', () => {
      menu.style.top = '-600%';
    });
  }

  burger.addEventListener('click', () => {
    menu.style.top = 0;
  });
});