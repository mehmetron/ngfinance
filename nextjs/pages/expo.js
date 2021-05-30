/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import Expo from 'views/Expo';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ExpoPage = () => {
  return (
    <WithLayout
      component={Expo}
      layout={Main}
    />
  )
};

export default ExpoPage;
