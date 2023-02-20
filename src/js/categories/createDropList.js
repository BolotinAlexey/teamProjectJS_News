import { ref } from './refCaregories';
import CATEGORIES_DROP_LENGTH from '../constants';
export default function createDropList(list) {
  ref.arrBtns.forEach((el, i) => {
    if (!el.classList.contains('drop-btn')) el.textContent = list[i];
  });
}
