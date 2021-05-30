/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import WebBasic from 'views/WebBasic';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const WebBasicPage = () => {
  return (
    <WithLayout
      component={WebBasic}
      layout={Main}
    />
  )
};

export default WebBasicPage;
