import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import voorbeeld from '../public/voorbeeld.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div style={{position: 'relative', width: '100%', height: '500px'}}>
        <Image
          src={voorbeeld}
          alt="Picture of the author"
          width={700}
          height={700}
          placeholder="blur"
        />
        </div>

        <div style={{position: 'relative', width: '100%', height: '500px'}}>
        <Image
          src="https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          //blurDataURL="https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=80"
          //placeholder="blur"
          layout="responsive"
          width={700}
          height={475}
        />
        </div>

      </main>

    </div>
  )
}
