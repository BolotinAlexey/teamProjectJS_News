import ApiNews from './js/apiNews';
import jsScriptHeader from './js/jsScriptHeader';
import categores from './js/categories';
import calendar from './js/calendar';
import cardsHome from './js/cardsHome';

const news = new ApiNews();
jsScriptHeader();
categores(news);
calendar();
cardsHome(news);
