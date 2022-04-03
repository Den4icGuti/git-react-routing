import styles from '../PageHeading/PagesTitle.module.css';

const PageBooksTitle = ({ title }) => {
  return (
    <section className={styles.boxTitle}>
       <h1 className={styles.title}>{title}</h1>
    </section>
  
  );
}

export default PageBooksTitle;