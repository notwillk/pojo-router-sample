import React from 'react';
import { useBrowserPathname } from 'react-browser-pathname';
import { useCurrentPath, useCurrentMatch } from 'pojo-router';

import AppProviders from './AppProviders';
import Navigation from './Components/Navigation';
import Fallback from './Components/Fallback';

const App = () => {
  const pathname = useBrowserPathname();
  useCurrentPath(pathname);

  const { Component } = useCurrentMatch();

  return (
    <div>
      <Navigation />
      { Component ? <Component /> : <Fallback /> }
    </div>
  );
}

export default () => <AppProviders><App /></AppProviders>;
