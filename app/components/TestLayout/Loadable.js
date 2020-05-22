/**
 *
 * Asynchronously loads the component for TestLayout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
