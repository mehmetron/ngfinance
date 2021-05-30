/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Pricing from 'views/Pricing';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const PricingPage = () => {
  return (
    <WithLayout
      component={Pricing}
      layout={Main}
    />
  )
};

export default PricingPage;
