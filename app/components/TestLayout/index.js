/**
 *
 * TestLayout
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TestLayout({ countries }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      {countries && countries.map(item => <span>{item.name}&nbsp;//</span>)}
    </div>
  );
}

TestLayout.propTypes = {};

export default memo(TestLayout);
