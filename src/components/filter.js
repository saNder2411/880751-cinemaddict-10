import AbstractComponent from './abstract-component.js';

const createFiltersTemplate = (filterValues) => {
  const { watchList, watched, favorite } = filterValues;

  return (
    `<nav class="main-navigation">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchList}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watched}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
      <a href="#stats" class="main-navigation__item main-navigation__item--additional main-navigation__item--active">Stats</a>
    </nav>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filterValues) {
    super();
    this._filterValues = filterValues;
  }

  getTemplate() {
    return createFiltersTemplate(this._filterValues);
  }
}
