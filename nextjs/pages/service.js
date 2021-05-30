/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Service from 'views/Service';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ServicePage = () => {
  return (
    <WithLayout
      component={Service}
      layout={Main}
    />
  )
};

export default ServicePage;
