/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_COUNTRIES } from './constants';

import {
  requestCountry,
  requestCountrySuccess,
  requestCountryError,
} from './actions';

/**
 * Github repos request/response handler
 */
export function* fetchCountryAsync() {
  // Select username from store
  console.log("saga triggered###")
  yield put(requestCountry());
  const requestURL = 'https://restcountries.eu/rest/v2/all';

  try {
    // Call our request helper (see 'utils/request')
    const countries = yield call(request, requestURL);
    yield put(requestCountrySuccess(countries));
  } catch (err) {
    yield put(requestCountryError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* fetchCountry() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_COUNTRIES, fetchCountryAsync);
}
