import styles from './PostForm.module.scss'
const PostForm = () => {
  return (
    <div>
      <form>
        <textarea className={styles.formContent}></textarea>
        <button className={styles.formButton}>Add New Tweet</button>
      </form>
    </div>
  )
}

export default PostForm
