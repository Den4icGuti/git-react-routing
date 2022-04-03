import AuthorsTitle from "components/PageHeading/AutorsTitle";
import styles from "../Pages/Pages.module.css";
const Authors = () => { 
  return (
    <section className={styles.boxTitle}>
      <AuthorsTitle title='Авторы'/>
    </section>
  )
}
export default Authors;