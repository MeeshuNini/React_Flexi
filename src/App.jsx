import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import BlogPostList from './components/blogPostList';
import BlogPostDetail from './components/blogPostDetails';
import BlogPostForm from './components/blogPostForm';
import './App.css';

function App() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Understanding React',
      summary: 'An introduction to React concepts and architecture.',
      content: '<p>This is the <strong>full content</strong> of Understanding React.</p>',
      author: 'John Doe',
      date: '2024-05-15'
    },
    {
      id: '2',
      title: 'Advanced CSS Tips',
      summary: 'Take your CSS skills to the next level with these tips.',
      content: '<p>This is the <em>complete article</em> on advanced CSS.</p>',
      author: 'Jane Smith',
      date: '2024-05-20'
    },
    {
      id: '3',
      title: 'Accessibility in Web Development',
      summary: 'Tips for making your web applications more accessible.',
      content: '<p>Make your apps accessible for all users.</p>',
      author: 'Alex Roe',
      date: '2023-03-10'
    }
  ]);

  const handleDelete = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const handleCreateOrUpdate = (newPost) => {
    setPosts(prev => {
      const exists = prev.some(post => post.id === newPost.id);
      if (exists) {
        return prev.map(post => (post.id === newPost.id ? newPost : post));
      } else {
        return [...prev, { ...newPost, id: Date.now().toString() }];
      }
    });
    navigate('/');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Blog Posts</h1>
              <Link to="/new" className="new-post-button">Create New Post</Link>
              <BlogPostList posts={posts} onDelete={handleDelete} />
            </>
          }
        />
        <Route path="/post/:id" element={<BlogPostDetail posts={posts} onDelete={handleDelete} />} />
        <Route path="/edit/:id" element={<BlogPostForm posts={posts} onSubmit={handleCreateOrUpdate} />} />
        <Route path="/new" element={<BlogPostForm posts={[]} onSubmit={handleCreateOrUpdate} />} />
      </Routes>
    </div>
  );
}

export default App;
