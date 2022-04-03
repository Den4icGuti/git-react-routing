import styles from '../PageHeading/PagesTitle.module.css';
const AuthorsTitle = ({ title }) => { 
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}
export default AuthorsTitle;