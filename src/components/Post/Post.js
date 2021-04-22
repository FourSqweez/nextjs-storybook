import styles from './Post.module.scss'
import { FaHeart,FaShareAlt } from 'react-icons/fa'


const Post = ({ content, date }) => {
  return (
    <>
      <p className={styles.postContents}>{content}</p>
      <ul className={styles.postsMeta}>
        <li className={styles.postMetaData}>
          <FaHeart /> 34
        </li>
        <li className={styles.postMetaData}><FaShareAlt/> Share</li>
        <li className={styles.postMetaData}>{date}</li>
      </ul>
    </>
  )
}

export default Post
