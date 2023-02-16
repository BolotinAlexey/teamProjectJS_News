import onClikSearchBtn from './js/onClikSearchBtn';
const ref = {
  btnSearch: document.querySelector('.search__btn'),
  burger: document.querySelector('.menu__btn-burger'),
};
ref.btnSearch.addEventListener('click', onClikSearchBtn);
