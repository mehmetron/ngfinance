/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BlogArticlePage = () => {
  return (
    <WithLayout
      component={BlogArticle}
      layout={Main}
    />
  )
};

export default BlogArticlePage;
