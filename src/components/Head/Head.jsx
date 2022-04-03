import styles from '../Head/Head.module.css';
const Header = ({children}) => { 
  return <header className={styles.head}>{children}
  </header>
}
export default Header;