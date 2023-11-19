import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import React from 'react'
import Image from 'next/image'
import noun7 from '../../images/7.jpeg'
import noun8 from '../../images/8.jpeg'
import noun9 from '../../images/9.jpeg'


const NounContent: NextPage = () => {
  return (
    <main className={styles.main}>
    <div className={styles.sectionContentCenter}>
    {/* Content for the centered section goes here */}



    <div className={styles.buttonContainer}>
  <a href="https://data.lighthouse.storage/dashboard" className={styles.linkButton}>
    <button className={styles.submitButton}>Upload to Data Depot</button>
  </a>
  <a href='http://localhost/3001'>
  <button className={styles.submitButton}>Publish to Editstars DAO</button>
  </a>
  <a href='https://www.figma.com/file/qpBPAX2Y3lsCh00d2T7Dvy/Nouns.wtf---All-traits-(Community)?type=design&node-id=301-574&mode=design&t=ukwdg1po9cQI3t1f-0'>
  <button className={styles.submitButton}>Check Nouns DAO page</button>
  </a>


</div>

    <div className={`${styles.cardRowFive}`}>
      {/* Use the new cardFive class for a 5-card row */}
      <a className={styles.cardFive}>
        <Image className={`${styles.contentImage}`} src={noun7} alt="React Image" />
        <h2>Noun chilling!</h2>
        
          <button className={styles.upvoteButton} >Upvote</button>
        
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={noun8} alt="React Image" />
        <h2>Noun party in the house</h2>
        
          <button className={styles.upvoteButton}>Upvote</button>
        
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={noun9} alt="React Image" />
        <h2>Noun on the road</h2>
        
          <button className={styles.upvoteButton}>Upvote</button>

        
      </a>

    </div>
  </div>
  </main>
  )
}

export default NounContent;