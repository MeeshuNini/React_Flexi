import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import BlogPostList from './components/blogPostList'
import BlogPostDetail from './components/blogPostDetails'
import BlogPostForm from './components/blogPostForm'

// Sample blog data
const posts = [
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
    content: '<p>Accessibility is key to a great user experience.</p>',
    author: 'Alex Kim',
    date: '2023-03-10'
  }
]

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route path="/posts/:id" element={<BlogPostDetailWrapper posts={posts} />} />
        <Route path="/create" element={<BlogPostForm onSubmit={(data) => console.log('Created:', data)} />} />
        <Route path="/edit/:id" element={<EditPostWrapper posts={posts} />} />
      </Routes>
    </div>
  )
}

// Wrapper to find post by ID for detail view
function BlogPostDetailWrapper({ posts }) {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)
  return post ? <BlogPostDetail post={post} /> : <p>Post not found.</p>
}

// Wrapper to find post by ID for editing
function EditPostWrapper({ posts }) {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)
  return post ? (
    <BlogPostForm post={post} onSubmit={(data) => console.log('Edited:', data)} />
  ) : (
    <p>Post not found.</p>
  )
}

export default App
