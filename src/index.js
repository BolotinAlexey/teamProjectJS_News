import onClikSearchBtn from './js/onClikSearchBtn';
const ref = {
  header: document.querySelector('.header'),
  btnSearch: document.querySelector('.search__btn'),
  burger: document.querySelector('.menu__btn-burger'),
  cross: document.querySelector('.menu__btn-cross'),
  menu: document.querySelector('.menu'),
};
ref.btnSearch.addEventListener('click', onClikSearchBtn);

ref.burger.addEventListener('click', () =>
  ref.menu.classList.remove('is-hidden')
);

ref.cross.addEventListener('click', () => ref.menu.classList.add('is-hidden'));
