import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import SectionContent from './components/sectionContent';
import Footer from './components/Footer';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />
      <SectionContent/>
      
      <Footer />
    </div>
  );
};

export default Home;
