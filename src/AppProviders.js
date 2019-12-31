import React, { Suspense } from 'react';
import BrowserPathname from 'react-browser-pathname';

import Router from './Router';

const AppProviders = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserPathname>
      <Router>
        {children}
      </Router>
    </BrowserPathname>
  </Suspense>
);

export default AppProviders;