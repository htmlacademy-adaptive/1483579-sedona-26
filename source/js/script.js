const nojsElement = document.querySelector('.nojs');
nojsElement.classList.remove('nojs');

const buttonToggle = document.querySelector('.toggle');
const navSelector = document.querySelector('.navigation__list');

//buttonToggle.classList.remove('navigation__list--closed');

console.dir('buttonToggle');

const openMenu = function(){
  navSelector.classList.toggle('navigation__list--closed');
  navSelector.classList.toggle('navigation__list--open');
}

buttonToggle.addEventListener('click', openMenu);
