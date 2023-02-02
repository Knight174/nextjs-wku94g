import Link from 'next/link';

export default function Y() {
  return (
    <div>
      <style jsx>{`h1 {color: #ff4200;}`}</style>

      <h1>Second Post</h1>
      <Link href="/">回到首页</Link>
    </div>
  );
}
