/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Agency from 'views/Agency';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AgencyPage = () => {
  return (
    <WithLayout
      component={Agency}
      layout={Main}
    />
  )
};

export default AgencyPage;
