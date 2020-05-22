/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  REQUEST_COUNTRIES,
  RECEIVED_COUNTRIES,
  ERROR_COUNTRIES,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case REQUEST_COUNTRIES:
        return Object.assign({}, state, {
          loading: true,
        });
      case RECEIVED_COUNTRIES:
        return Object.assign({}, state, {
          loading: false,
          countries: action.countries,
        });
      case ERROR_COUNTRIES:
        return Object.assign({}, state, {
          loading: true,
          error: true,
        });
      default:
        return state;
    }
  });

export default homeReducer;
