import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import BlogPostList from './components/blogPostList';
import BlogPostDetail from './components/blogPostDetails';

// Sample blog data
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: '<p>This is the full content for Getting Started with React.</p>',
    author: 'John Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: '<p>This is the full content for CSS Grid vs. Flexbox.</p>',
    author: 'Jane Smith',
    date: '2023-02-15',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: '<p>This is the full content for Accessibility in Web Development.</p>',
    author: 'Alice Johnson',
    date: '2023-03-10',
  },
];

// Wrapper to fetch post by ID
function BlogPostDetailWrapper({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  return <BlogPostDetail post={post} />;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route path="/posts/:id" element={<BlogPostDetailWrapper posts={samplePosts} />} />
      </Routes>
    </div>
  );
}

export default App;

// 