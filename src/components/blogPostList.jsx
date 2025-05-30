import BlogPostItem from './blogPostItem';
import styles from './blogPostList.module.css';

export default function BlogPostList({ posts }) {
  if (!posts.length) return <p className={styles.empty}>No blog posts available.</p>;

  return (
    <div className={styles.list}>
      {posts.map(post => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
