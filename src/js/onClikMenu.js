export default function onClikMenu(e) {
  console.log(e.currentTarget.parentNode.parentNode);
  e.currentTarget.parentNode.classList.toggle('is-hidden');
}
