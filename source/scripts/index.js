/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const siteList = document.querySelector('.site-list');

mainNav.classList.remove('main-nav--nojs');
siteList.classList.remove('site-list--open');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    siteList.classList.add('site-list--open');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    siteList.classList.remove('site-list--open');
  }
});
