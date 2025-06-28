// components/Comment.jsx
import React from 'react';
import styles from './comment.module.css';

const Comment = ({ name, date, text, avatar }) => {
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.comment}>
      {avatar && <img src={avatar} alt={name} className={styles.avatar} />}
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
