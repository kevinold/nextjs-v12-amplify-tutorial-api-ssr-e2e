import Head from "next/head";
import styles from "../styles/Home.module.css";

const POSTS_ORIGIN = process.env.AWS_APP_ID
  ? `https://${process.env.AWS_BRANCH}.${process.env.AWS_APP_ID}.amplifyapp.com`
  : "http://localhost:3000";

export async function getStaticProps() {
  const res = await fetch(`${POSTS_ORIGIN}/api/posts`);
  const { posts } = await res.json();

  return {
    props: {
      time: new Date().toISOString(),
      posts,
    },
    revalidate: 60,
  };
}

export default function ISRAPI({ posts, time }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ISR API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>{time}</div>
        {posts.map((post) => (
          <a
            data-test={`post-${post.id}`}
            className={styles.card}
            href={`/posts/${post.id}`}
            key={post.id}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
