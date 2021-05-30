/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogSearch from 'views/BlogSearch';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BlogSearchPage = () => {
  return (
    <WithLayout
      component={BlogSearch}
      layout={Main}
    />
  )
};

export default BlogSearchPage;
