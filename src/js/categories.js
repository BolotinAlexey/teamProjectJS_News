import defineSizesWindow from './categories/defineSizesWindow';
import defineCountCategories from './categories/defineCountCategories';
import createStringList from './categories/createStringList';
import createDropList from './categories/createDropList';
import onDrop from './categories/onDrop';
import onDropParent from './categories/onDropParent';
import randomList from './categories/randomList';
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
  // const categList = localStorage.getItem('categList')?.split(',') || [];
  // if (categList.length < CATEGORIES_LENGTH)
  //   getCategories(news, categList).then(list =>
  //     createListManager(list, ref.list)
  //   );
  // else createListManager(categList);

  getCategories(news).then(list => createListManager(list));
}

async function getCategories(news) {
  const arrCategCommon = await news.categories;

  return arrCategCommon.map(el => el.display_name);

  // localStorage.setItem('categList', arrCateg);
}

function createListManager(list) {
  createDropList([...randomList(list)]);
}
