import React, { useEffect, useRef } from 'react';
import styles from './confirmationDialog.module.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <h2 id="dialog-title">Confirm Deletion</h2>
        <p id="dialog-description">Are you sure you want to delete this post?</p>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
          <button onClick={onConfirm} className={styles.deleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
