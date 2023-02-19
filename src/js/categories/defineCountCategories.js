export default function defineCountCategories(w) {
  if (w < 768) return 1;
  if (w < 1200) return 5;
  return 7;
}
