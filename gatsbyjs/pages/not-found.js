/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NotFound from 'views/NotFound';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const NotFoundPage = () => {
  return (
    <WithLayout
      component={NotFound}
      layout={Minimal}
    />
  )
};

export default NotFoundPage;
