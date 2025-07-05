import React from 'react';
import BlogPostItem from './blogPostItem';

const BlogPostList = ({ posts, onDelete }) => {
  if (posts.length === 0) {
    return <p style={{ padding: '2rem' }}>No posts found.</p>;
  }
  return (
    <div>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BlogPostList;
