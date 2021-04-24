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

export default function Home({ posts }) {
  const { user, logIn, logOut } = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>Log In</button>
        </p>
      )}

      {user && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

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
          {posts.map((post) => {
            const { content, id, date } = post
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  }).format(new Date(date))}
                />
              </li>
            )
          })}
        </ul>
        {user && <PostForm />}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://api.airtable.com/v0/appXYlM8omAz2zpOp/Posts',
    {
      headers: {
        Authorization: `Bearer keyvBYkzWi8cTAwcP`,
      },
    }
  )
  const { records } = await response.json()

  const posts = records.map((record) => {
    return {
      id: record.id,
      ...record.fields,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
