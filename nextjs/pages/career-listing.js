/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerListing from 'views/CareerListing';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CareerListingPage = () => {
  return (
    <WithLayout
      component={CareerListing}
      layout={Main}
    />
  )
};

export default CareerListingPage;
