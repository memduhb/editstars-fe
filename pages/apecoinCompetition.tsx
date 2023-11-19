import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import ApecoinContent from './components/apecoinContent';
import Footer from './components/Footer';

const ApecoinCompetition: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />
         
    <h2>Step 1: Upload to Data Depot, take the payload</h2>
    <h2>Step 2: Propose to Edit Stars DataDAO with payload </h2>
      <ApecoinContent />
  
      <Footer />
     
    </div>
  );
};

export default ApecoinCompetition;