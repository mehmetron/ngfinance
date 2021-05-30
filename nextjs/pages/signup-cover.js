/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import SignupCover from 'views/SignupCover';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const SignupCoverPage = () => {
  return (
    <WithLayout
      component={SignupCover}
      layout={Minimal}
    />
  )
};

export default SignupCoverPage;
