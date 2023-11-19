import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import SectionContentCenter from './components/sectionContentCenter';
import Footer from './components/Footer';

const Sports: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />
      <h2>Current Matching Pool: 0.72 ETH</h2>
      <h2>Round ends in 2 days 11 hours.</h2>
      <SectionContentCenter />
  
      <Footer />
     
    </div>
  );
};

export default Sports;