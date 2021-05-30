/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import PasswordResetSimple from 'views/PasswordResetSimple';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const PasswordResetSimplePage = () => {
  return (
    <WithLayout
      component={PasswordResetSimple}
      layout={Minimal}
    />
  )
};

export default PasswordResetSimplePage;
