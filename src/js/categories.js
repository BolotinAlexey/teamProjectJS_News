import defineSizesWindow from ('./categories/defineSizesWindow');
import definecountCategories from ('./categories/defineCountCategories');

export default function categores(params) {
  const { windowWidth, windowHeight } = defineSizesWindow();
  const countCategories = defineCountCategories(windowWidth);
}
