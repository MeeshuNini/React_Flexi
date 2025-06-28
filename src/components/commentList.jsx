// components/CommentList.jsx
import React from 'react';
import Comment from './comment';
import styles from './commentList.module.css';

const CommentList = ({ comments }) => (
  <div className={styles.list}>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </div>
);

export default CommentList;
