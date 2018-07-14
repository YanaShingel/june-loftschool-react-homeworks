import { createSelector } from 'reselect';

export const getSearchLoading = state => state.search.isLoading;
export const getSearchError = state => state.search.error;
export const getSearchSerials = createSelector(
  state => state.search.serials,
  serials =>
    serials.map(el => ({
      id: el.id,
      name: el.name,
      image: el.image,
      summary: el.summary
    }))
);
