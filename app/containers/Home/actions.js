/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_COUNTRIES,
  RECEIVED_COUNTRIES,
  ERROR_COUNTRIES,
  FETCH_COUNTRIES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const requestCountry = () => ({ type: REQUEST_COUNTRIES });

export const requestCountrySuccess = data => ({
  type: RECEIVED_COUNTRIES,
  countries: data,
});

export const requestCountryError = () => ({ type: ERROR_COUNTRIES });

export const fetchCountry = () => ({ type: FETCH_COUNTRIES });
