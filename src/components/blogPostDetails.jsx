import React, { useState } from 'react';
import styles from './blogPostDetail.module.css';
import DeleteButton from './deleteButton';
import ConfirmationDialog from './confirmationDialog';
import CommentList from './commentList';
import CommentForm from './commentForm';
const BlogPostDetails = ({ post, onDelete }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [comments, setComments] = useState([]);


  const handleNewComment = (newComment) => {
    setComments(prev => [...prev, newComment]);
  };

  const handleDelete = () => {
    setDialogOpen(false);
    onDelete(post.id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>By {post.author} on {post.date}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <DeleteButton onClick={() => setDialogOpen(true)} />

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
      />
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleNewComment} isLoggedIn={false} />
    </div>
  );
};

export default BlogPostDetails;
