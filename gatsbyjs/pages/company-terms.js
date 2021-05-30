/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CompanyTerms from 'views/CompanyTerms';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CompanyTermsPage = () => {
  return (
    <WithLayout
      component={CompanyTerms}
      layout={Main}
    />
  )
};

export default CompanyTermsPage;
