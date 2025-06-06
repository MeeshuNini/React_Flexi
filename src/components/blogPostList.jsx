import React from 'react';
import { Link } from 'react-router-dom';
import './blogPostList.module.css';

function BlogPostList({ posts }) {
  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      <Link to="/new" className="new-post-button">New Post</Link>
      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          <p>{post.summary}</p>
          <p className="meta">{post.author} | {new Date(post.date).toDateString()}</p>
          <Link to={`/edit/${post.id}`} className="edit-link">Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
