import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>

        <ul className={styles.post}>
          <li>
            <Post content="Hey, I'm a new post!" date="3/2/2021" />
          </li>
          <li>
            <Post
              content="
              I’m working in Figma trying to design a new website that shows all
              of my tweets!"
              date="4/19/2021"
            />
          </li>
          <li>
            <Post
              content="
              I’m working in Figma trying to design a new website that shows all
              of my tweets!"
              date="4/19/2021"
            />
          </li>
          <li>
            <Post
              content="
              I’m working in Figma trying to design a new website that shows all
              of my tweets!"
              date="4/19/2021"
            />
          </li>
        </ul>
        <PostForm />
      </main>
    </div>
  )
}
