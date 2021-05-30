/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CloudHosting from 'views/CloudHosting';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CloudHostingPage = () => {
  return (
    <WithLayout
      component={CloudHosting}
      layout={Main}
    />
  )
};

export default CloudHostingPage;
