import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './blogPostForm.module.css';

function BlogPostForm({ posts = [], onSubmit }) {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const existingPost = posts.find(p => p.id === id);

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    author: '',
    date: '',
  });

  useEffect(() => {
    if (isEdit && existingPost) {
      setFormData(existingPost);
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = isEdit ? { ...formData, id } : formData;
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.blogPostForm}>
      <div className={styles.formGroup}>
        <label>Title</label>
        <input name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Summary</label>
        <input name="summary" value={formData.summary} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Content (HTML)</label>
        <textarea name="content" value={formData.content} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Author</label>
        <input name="author" value={formData.author} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit">{isEdit ? 'Update' : 'Create'} Post</button>
      </div>
    </form>
  );
}

export default BlogPostForm;
