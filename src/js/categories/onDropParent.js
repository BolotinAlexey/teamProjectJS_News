export default function onDropParent(e) {
  if (e.currentTarget.classList.contains('categories__btn-drop')) return;
  e.currentTarget.parentNode.classList.toggle('isActiveCateg');
}
