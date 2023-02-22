const KEY = 'api-key=xioBUOy2utwoIp3nFtYp70R2qf3VItvB';
const URL = 'https://api.nytimes.com/svc/';
const URL_POPULAR = `${URL}mostpopular/v2/emailed/7.json?${KEY}`;
const URL_SEARCH = `${URL}search/v2/articlesearch.json?q=election&${KEY}`;
const URL_CATEGORIES = `${URL}news/v3/content/section-list.json?${KEY}`;
const URL_CATEGORY = `${URL}news/v3/content/all/`;

import axios from 'axios';

export default class ApiNews {
  constructor() {
    console.log(URL_CATEGORY, URL_CATEGORIES);
  }
  get categories() {
    return axios
      .get(URL_CATEGORIES)
      .then(x => x.data.results)
      .catch(error => console.log(error));
  }

  getCategory(category) {
    return axios
      .get(URL_CATEGORY.concat(category.concat(`.json?${KEY}`)))
      .then(x => x.data.results)
      .catch(error => console.log(error));
  }
}
