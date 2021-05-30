/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Rental from 'views/Rental';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const RentalPage = () => {
  return (
    <WithLayout
      component={Rental}
      layout={Main}
    />
  )
};

export default RentalPage;
