/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import About from 'views/About';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AboutPage = () => {
  return (
    <WithLayout
      component={About}
      layout={Main}
    />
  )
};

export default AboutPage;
