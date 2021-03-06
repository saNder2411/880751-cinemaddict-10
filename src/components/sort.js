import AbstractComponent from './abstract-component.js';
import {SortType} from '../const.js';

const createSortingTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort by date</a></li>
      <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

export default class Sort extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortingTemplate();
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      this.getElement().querySelector(`.sort__button--active`)
        .classList.remove(`sort__button--active`);

      evt.target.classList.add(`sort__button--active`);

      handler(this._currentSortType);
    });
  }

  setSortTypeDefault() {
    const sortDefault = this.getElement().querySelector(`a[data-sort-type="${SortType.DEFAULT}"]`);

    this._currentSortType = SortType.DEFAULT;

    this.getElement().querySelector(`.sort__button--active`)
      .classList.remove(`sort__button--active`);

    sortDefault.classList.add(`sort__button--active`);
  }
}
