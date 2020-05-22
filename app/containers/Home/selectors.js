import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate,
  );

const makeSelectCountries = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.countries,
  );

export { makeSelectHome, makeSelectCountries };
export { selectHomeDomain };
