import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import CompetitionContent from './components/competitionContent';
import Footer from './components/Footer';
import SectionContentCenter from './components/sectionContentCenter';

const Competition: NextPage = () => {
    return (
        <div className={styles.container}>
            
            <Header />
            <CompetitionContent/>
            <Footer />
            
        </div>

    )
}

export default Competition;

