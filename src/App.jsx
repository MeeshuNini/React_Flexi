// App.jsx
import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import BlogPostList from './components/blogPostList';
import BlogPostDetails from './components/blogPostDetails';
import BlogPostForm from './components/blogPostForm';
import Layout from './components/layout';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
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
    alert(`Post with ID ${postId} has been deleted.`);
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const handleSubmit = (newPost) => {
    setPosts(prev =>
      prev.some(p => p.id === newPost.id)
        ? prev.map(p => (p.id === newPost.id ? newPost : p))
        : [...prev, { ...newPost, id: Date.now().toString() }]
    );
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const BlogPostView = () => {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);
    return post ? (
      <BlogPostDetails post={post} onDelete={handleDelete} />
    ) : (
      <div style={{ padding: '2rem' }}>
        <h2>Post not found</h2>
      </div>
    );
  };

  return (
    <Layout onSearch={setSearchQuery}>
      <Routes>
        <Route
          path="/"
          element={
            <BlogPostList
              posts={filteredPosts.map((post) => ({
                ...post,
                url: `/posts/${post.id}`,
              }))}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/"
          element={
            <BlogPostList
              posts={posts.map((post) => ({
                ...post,
                url: `/posts/${post.id}`,
              }))}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/blog"
          element={<BlogPostList posts={posts} onDelete={handleDelete} />}
        />
        <Route path="/posts/:id" element={<BlogPostView />} />
        <Route path="/new" element={<BlogPostForm onSubmit={handleSubmit} posts={posts} />} />
        <Route path="/edit/:id" element={<BlogPostForm onSubmit={handleSubmit} posts={posts} />} />
        <Route
          path="/about"
          element={
            <div style={{ padding: '2rem' }}>
              <h2>About This Blog</h2>
              <p>This is a demo blog application built with React.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
