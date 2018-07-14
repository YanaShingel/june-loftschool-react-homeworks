import { createSelector } from 'reselect';

export const getShowLoading = state => state.show.isLoading;
export const getShowError = state => state.show.error;
export const getShowSelect = createSelector(
  state => state.show.select,
  select =>
    Object.assign(
      {},
      {
        id: select.id,
        name: select.name,
        image: select.image,
        summary: select.summary,
        _embedded: select._embedded
      }
    )
);
