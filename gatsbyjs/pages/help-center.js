/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import HelpCenter from 'views/HelpCenter';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const HelpCenterPage = () => {
  return (
    <WithLayout
      component={HelpCenter}
      layout={Main}
    />
  )
};

export default HelpCenterPage;
