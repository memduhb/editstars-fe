import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import SectionContentCenter from './components/sectionContentCenter';
import Footer from './components/Footer';

const Sports: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />
      
      <SectionContentCenter />
  
      <Footer />
     
    </div>
  );
};

export default Sports;