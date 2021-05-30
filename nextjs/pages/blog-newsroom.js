/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogNewsroom from 'views/BlogNewsroom';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BlogNewsroomPage = () => {
  return (
    <WithLayout
      component={BlogNewsroom}
      layout={Main}
    />
  )
};

export default BlogNewsroomPage;
