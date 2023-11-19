import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import React from 'react'
import bayc1 from '../../images/1.jpeg';
import bayc2 from '../../images/2.jpeg';
import bayc3 from '../../images/3.jpeg';
import bayc4 from '../../images/4.jpeg';
import bayc5 from '../../images/5.jpeg';
import bayc6 from '../../images/6.jpeg';
import Image from 'next/image'


const ApecoinContent: NextPage = () => {
  return (
    <main className={styles.mainape}>
    <div className={styles.sectionContentCenter}>
    {/* Content for the centered section goes here */}
   
    <div className={styles.buttonContainer}>
  <a href="https://data.lighthouse.storage/dashboard" className={styles.linkButton}>
    <button className={styles.submitButton}>Make a submission</button>
  </a>
  
  <button onClick={() => window.location.href = 'http://localhost:3001'} className={styles.submitButton} >Visit Editstars DAO</button>

</div>

    <div className={`${styles.cardRowFive}`}>
      {/* Use the new cardFive class for a 5-card row */}
      <a className={styles.cardFive}>
        <Image className={`${styles.contentImage}`} src={bayc1} alt="React Image" />
        <h2>Apes on the boaat!</h2>
          <button className={styles.upvoteButton} >Upvote</button>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={bayc2} alt="React Image" />
        <h2>Apecalypse</h2>
          <button className={styles.upvoteButton}>Upvote</button>
        
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={bayc3} alt="React Image" />
        <h2>Apes on the news</h2>
          <button className={styles.upvoteButton}>Upvote</button>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={bayc4} alt="React Image" />
        <h2>Apes fighting</h2>
          <button className={styles.upvoteButton}>Upvote</button>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={bayc5} alt="React Image" />
        <h2>Pixel Apes</h2>
        
          <button className={styles.upvoteButton}>Upvote</button>
        
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={bayc6} alt="React Image" />
        <h2>Snoop Dogg ape fest edit</h2>
        
          <button className={styles.upvoteButton}>Upvote</button>
        
      </a>
        
    
    </div>
  </div>
  </main>
  )
}

export default ApecoinContent;