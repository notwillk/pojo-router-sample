import React from 'react';
import PojoRouter from 'pojo-router';

import * as namedPaths from './routes';
import Page from './Components/Page';
import Other from './Components/Other';

const routes = [
  ['page1', { abc:123, Component: Page }],
  ['page2', { abc:456 }],
  ['page3', { abc:789, Component: Page }],
  ['/page4', { abc:0, Component: Other }]
];

const notFound = { nothing: true };

const Router = ({ children }) => (
  <PojoRouter namedPaths={namedPaths} routes={routes} notFound={notFound}>
    { children }
  </PojoRouter>
);

export default Router;
