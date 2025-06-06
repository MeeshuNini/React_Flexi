import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './blogPostDetail.module.css';



function BlogPostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p><em>{post.author} | {new Date(post.date).toDateString()}</em></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default BlogPostDetail;
