import Link from "next/link";
import styles from "./styles/Posts.module.css";

export default function PostList() {
  return (
    <div>
      <h1 className={styles.title}>Post List</h1>
      <ul>
        <li>
          <Link href="/posts/1">first post</Link>
        </li>
        <li>
          <Link href="/posts/2">second post</Link>
        </li>
        <li>
          <Link href="/posts/3">third post</Link>
        </li>
      </ul>
    </div>
  );
}
