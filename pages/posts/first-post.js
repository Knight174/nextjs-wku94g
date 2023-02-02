import Link from 'next/link';
import styles from './styles/Posts.module.css';

export default function X() {
  return (
    <div>
      <h1 className={styles['text-center']}>First Post</h1>
      <Link href="/">回到首页</Link>
    </div>
  );
}
