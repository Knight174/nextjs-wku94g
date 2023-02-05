import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const marginRight = '10px';

  return (
    <div>
      <style jsx>{`.goback-btn {margin-right: ${marginRight};}`}</style>
      <nav>
        <button className="goback-btn" onClick={() => router.back()}>
          go back
        </button>
        <Link href="/">Home</Link> |{' '}
        <Link href="/posts/post-list">Post List</Link>
      </nav>
      <h1>Post: {pid}</h1>
    </div>
  );
}
