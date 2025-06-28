// components/CommentForm.jsx
import React, { useState } from 'react';
import styles from './commentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName = '' }) => {
  const [name, setName] = useState(userName);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || (!isLoggedIn && !name)) return;

    const newComment = {
      name,
      text,
      date: new Date(),
      avatar: 'https://via.placeholder.com/50',
    };

    onSubmit(newComment);
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Add a comment">
      {!isLoggedIn && (
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
