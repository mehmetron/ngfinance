/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignupSimple from 'views/SignupSimple';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const SignupSimplePage = () => {
  return (
    <WithLayout
      component={SignupSimple}
      layout={Minimal}
    />
  )
};

export default SignupSimplePage;
