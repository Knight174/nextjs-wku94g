import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import book from "/assets/images/book-open.svg";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const marginRight = "10px";

  return (
    <div>
      <style jsx>{`
        .goback-btn {
          margin-right: ${marginRight};
        }
      `}</style>
      <nav>
        <button className="goback-btn" onClick={() => router.back()}>
          go back
        </button>
        <Link href="/">Home</Link> |{" "}
        <Link href="/posts/post-list">Post List</Link>
      </nav>
      <h1>Post: {pid}</h1>
      <Image src={book} alt="pokemon" width={32} height={32} />
      <br />
      <Image
        src="/pokemon-localImg.jpg"
        alt="pokemon"
        height={500}
        width={500}
        style={{
          width: "400px",
          height: "auto",
        }}
      />
      <br />
      <Image
        alt="post-image"
        src={
          "https://images.unsplash.com/photo-1675430422951-593ece599ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        }
        sizes="fill"
        width={1}
        height={1}
        style={{
          width: "300px",
          height: "auto",
        }}
      />
    </div>
  );
}
