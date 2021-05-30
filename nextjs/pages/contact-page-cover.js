/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import ContactPageCover from 'views/ContactPageCover';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const ContactCoverPage = () => {
  return (
    <WithLayout
      component={ContactPageCover}
      layout={Main}
    />
  )
};

export default ContactCoverPage;
