import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import CreateCompetition from './createCompetition';




const CompetitionContent:NextPage = () => {
    return (
        <div>
            <main className={styles.main}>
           

        
            

                   <CreateCompetition/>
                    





                    {/* Add more card elements as needed */}

                
            
        </main>
        </div>
    )
}

export default CompetitionContent;