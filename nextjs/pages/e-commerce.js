/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Ecommerce from 'views/Ecommerce';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const EcommercePage = () => {
  return (
    <WithLayout
      component={Ecommerce}
      layout={Main}
    />
  )
};

export default EcommercePage;
