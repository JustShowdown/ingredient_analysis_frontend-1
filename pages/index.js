import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Uploader from './components/uploader'

export default function Home() {
  return (
    <div className={styles.container} id="container">
      <Head >
        <title>成分检测上传</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        成分检测上传图像
        </h1>
        <Uploader className={styles.grid}/>
      </main>

      <footer className={styles.footer}>
          Powered by Me
      </footer>
    </div>
  )
}
