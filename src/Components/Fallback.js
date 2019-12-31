import React from 'react';
import { useCurrentMatch } from 'pojo-router';

const Fallback = () => {
  const value = useCurrentMatch();

  return <pre>{ JSON.stringify(value, null, '  ') }</pre>;
};

export default Fallback;
