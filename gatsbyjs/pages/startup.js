/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Startup from 'views/Startup';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const StartupPage = () => {
  return (
    <WithLayout
      component={Startup}
      layout={Main}
    />
  )
};

export default StartupPage;
