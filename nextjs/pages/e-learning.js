/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Elearning from 'views/Elearning';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ElearningPage = () => {
  return (
    <WithLayout
      component={Elearning}
      layout={Main}
    />
  )
};

export default ElearningPage;
