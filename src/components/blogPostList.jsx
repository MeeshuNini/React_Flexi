import React from 'react';
import BlogPostItem from './blogPostItem';

const BlogPostList = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BlogPostList;
