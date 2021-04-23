import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import Bio from '../components/Bio'
import { useAuth } from '../hooks/useAuth'

const bio = {
  headShot:
    'https://pbs.twimg.com/profile_images/1355118779974475776/9qZHpzCF_400x400.jpg',
  name: 'Four Sqweez',
  tagline: "I don't know",
  role: 'Frontend developer',
}

export default function Home() {
  const auth = useAuth()
  console.log('auth', auth)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {bio && (
          <Bio
            headShot={bio.headShot}
            name={bio.name}
            tagline={bio.tagline}
            role={bio.role}
          />
        )}

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
