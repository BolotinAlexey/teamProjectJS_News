import { ref } from './refCaregories';
import getCategory from '../cards/getCategory';
export default async function onClikCategories(news, e) {
  // if pressed <svg> or <span>
  let btn = e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;

  btn = btn.nodeName !== 'BUTTON' ? btn.parentNode : btn; // if pressed <use>

  if (btn.nodeName !== 'BUTTON') return; // if pressed <li.categories__item-drop>

  if (!btn.classList.contains('drop-btn')) {
    ref.dropList.classList.add('visually-hidden'); //close .categories__list-drop

    const dataByCategory = await news.getCategory(btn.dataset.category);
    console.log(dataByCategory);
  }

  document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');

  btn.parentNode.classList.add('isActiveCateg');
}
