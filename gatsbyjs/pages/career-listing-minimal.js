/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerListingMinimal from 'views/CareerListingMinimal';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CareerListingMinimalPage = () => {
  return (
    <WithLayout
      component={CareerListingMinimal}
      layout={Main}
    />
  )
};

export default CareerListingMinimalPage;
