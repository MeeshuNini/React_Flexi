import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './blogPostItem.module.css';
import DeleteButton from './deleteButton';
import ConfirmationDialog from './confirmationDialog';

const BlogPostItem = ({ post, onDelete }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDelete = () => {
    setDialogOpen(false);
    onDelete(post.id);
  };

  return (
    <div className={styles.item} id = {post.id}>
      <Link to={post.url} className={styles.title}>
        <h3>{post.title}</h3>
      </Link>
      <p className={styles.meta}>By {post.author} on {post.date}</p>
      <Link className={styles.edit} to={`/edit/${post.id}`}>Edit</Link>
      <DeleteButton onClick={() => setDialogOpen(true)} />

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default BlogPostItem;
