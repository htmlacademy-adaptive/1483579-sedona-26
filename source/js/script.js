const nojsElement = document.querySelector('.nojs');
nojsElement.classList.remove('nojs');

const buttonToggle = document.querySelector('.toggle');
const buttonToggleClose = document.querySelector('.toggle--close');
const navSelector = document.querySelector('.navigation__list');

//buttonToggle.classList.remove('navigation__list--closed');

console.dir('buttonToggle');

const openMenu = function(){
  navSelector.classList.toggle('navigation__list--closed');
  navSelector.classList.toggle('navigation__list--open');
  console.log('1');
}
const closeMenu = function(){
  navSelector.classList.toggle('navigation__list--closed');
  navSelector.classList.toggle('navigation__list--open');
  console.log('2');
}

buttonToggle.addEventListener('click', openMenu);
buttonToggleClose.addEventListener('click', closeMenu);
