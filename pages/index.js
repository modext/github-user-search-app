import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github user Search</title>
      </Head>

      <main className={styles.main}>
        Givers never lack
      </main>

      <footer className={styles.footer}>
      A modext creation
      </footer>
    </div>
  )
}
