import styles from '../PageHeading/PagesTitle.module.css';
const HomeTitle = ({ title }) => { 
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}
export default HomeTitle;