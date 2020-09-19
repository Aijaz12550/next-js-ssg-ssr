import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Panacloud</a>
        </h1>
        <Link href="/todos">
          <a>todos</a>
        </Link>
        <Link href="/clientFetching">
          <a>ClientFetching</a>
        </Link>
      </main>

      <footer className={styles.footer}>Panacloud</footer>
    </div>
  );
}
