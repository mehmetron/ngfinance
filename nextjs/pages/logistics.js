/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Logistics from 'views/Logistics';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const LogisticsPage = () => {
  return (
    <WithLayout
      component={Logistics}
      layout={Main}
    />
  )
};

export default LogisticsPage;
