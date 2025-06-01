import styles from './blogPostItem.module.css';
import { Link } from 'react-router-dom';

export default function BlogPostItem({ post }) {
  return (
    <div className={styles.card}>
      <Link to={`/posts/${post.id}`} className={styles.link}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.summary}>{post.summary}</p>
        <div className={styles.meta}>
          <span>{post.author}</span> | <span>{new Date(post.date).toDateString()}</span>
        </div>
      </Link>
    </div>
  );
}
