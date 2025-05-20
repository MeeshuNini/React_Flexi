import React from 'react';
import BlogPostItem from './blogPostItem';
import styles from './blogPostList.module.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogPostList;
