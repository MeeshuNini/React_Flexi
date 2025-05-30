import styles from '../components/blogPostDetail.module.css';

export default function BlogPostDetail({ post }) {
  if (!post) return <p className={styles.empty}>Post not found.</p>;

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        By <strong>{post.author}</strong> on {new Date(post.date).toDateString()}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
