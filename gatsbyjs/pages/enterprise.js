/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Enterprise from 'views/Enterprise';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const EnterprisePage = () => {
  return (
    <WithLayout
      component={Enterprise}
      layout={Main}
    />
  )
};

export default EnterprisePage;
