import React, { useState } from 'react';
import styles from './blogPostDetail.module.css';
import DeleteButton from './deleteButton';
import ConfirmationDialog from './confirmationDialog';

const BlogPostDetails = ({ post, onDelete }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

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
    </div>
  );
};

export default BlogPostDetails;
