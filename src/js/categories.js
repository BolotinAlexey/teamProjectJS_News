import defineSizesWindow from './categories/defineSizesWindow';
import defineCountCategories from './categories/defineCountCategories';
import createStringList from './categories/createStringList';
import createDropList from './categories/createDropList';
import onDrop from './categories/onDrop';
import onDropParent from './categories/onDropParent';
import { ref } from './categories/refCaregories';
import ApiNews from './apiNews';
import CATEGORIES_LENGTH from './constants';

export default function categores() {
  ref.drop.addEventListener('click', onDrop);
  ref.arrBtns.forEach(el => el.addEventListener('click', onDropParent));
  const news = new ApiNews();
  handlerCetegories(news);
}

// doing for resize or reload
function handlerCetegories(news) {
  // format returning from localStorage: "item1,item2,..."
  const categList = localStorage.getItem('categList')?.split(',') || [];
  if (categList.length < CATEGORIES_LENGTH)
    getCategories(news, categList).then(list =>
      createListManager(list, ref.list)
    );
  else createListManager(categList);
}

async function getCategories(news, list) {
  const arrCategCommon = await news.categories;
  arrCategCommon.length = CATEGORIES_LENGTH - list.length;
  const arrCateg = arrCategCommon.map(el => el.display_name);

  localStorage.setItem('categList', arrCateg);
  return arrCateg;
}

function createListManager(list) {
  const { windowWidth, windowHeight } = defineSizesWindow();
  const countCategories = defineCountCategories(windowWidth);
  createDropList(list);
}
