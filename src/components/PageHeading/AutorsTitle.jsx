import styles from '../PageHeading/PagesTitle.module.css';
const AuthorsTitle = ({ title }) => { 
  return (
    <section className={styles.boxTitle}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  
  )
}
export default AuthorsTitle;