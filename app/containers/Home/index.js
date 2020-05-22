/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { push } from 'connected-react-router';
import { makeSelectHome, makeSelectCountries } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchCountry } from './actions';
import TestLayout from '../../components/TestLayout/Loadable';

export function Home({ onFetchCountry, countries, goToAbout }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div>
        Home
        <button type="button" onClick={onFetchCountry}>
          Load Countries!
        </button>
        {/* {countries && countries.map(item => <span>{item.name}&nbsp;//</span>)} */}
      </div>
      <button onClick={goToAbout}>Go to About</button>
      <TestLayout countries={countries} />
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onFetchCountry: PropTypes.func,
  countries: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  countries: makeSelectCountries(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFetchCountry: evt => {
      evt.preventDefault();
      dispatch(fetchCountry());
    },
    goToAbout: evt => {
      evt.preventDefault();
      dispatch(push('/about'));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
