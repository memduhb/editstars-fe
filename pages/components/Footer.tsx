import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';

const Footer: NextPage = () => {
  return (
    <div> <footer className={styles.footer}>
    <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
      Made with ❤️ by your frens at ODTU
    </a>
  </footer></div>
  )
}

export default Footer;