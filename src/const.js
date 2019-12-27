const MAX_RATING = 9;
const AMOUNT_CARDS = 7;
const EXTRA_AMOUNT_CARDS = 2;
const AMOUNT_COMMENTS = 10;
const SHOWING_CARDS_AMOUNT_ON_START = 5;
const SHOWING_CARDS_AMOUNT_BY_BUTTON = 5;
const VALUES_FOR_USER_RANK = [1, 10, 11, 20];
const INTERACTIVE_ELEMENTS_CARD = {
  'film-card__poster': true,
  'film-card__title': true,
  'film-card__comments': true,
};
const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
};

const Mode = {
  DEFAULT: `default`,
  DETAILS: `details`,
};

const FilterType = {
  ALL: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
};

export {
  MAX_RATING, AMOUNT_CARDS, EXTRA_AMOUNT_CARDS, AMOUNT_COMMENTS,
  SHOWING_CARDS_AMOUNT_ON_START, SHOWING_CARDS_AMOUNT_BY_BUTTON,
  VALUES_FOR_USER_RANK, INTERACTIVE_ELEMENTS_CARD,
  SortType, Mode, FilterType
};
