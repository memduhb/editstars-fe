import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import sport1 from '../../images/10.jpeg'
import sport2 from '../../images/11.jpeg'
import sport3 from '../../images/12.jpeg'
import sport4 from '../../images/13.jpeg'
import sport5 from '../../images/14.jpeg'
import sport6 from '../../images/15.jpeg'
import Image from 'next/image'


const SectionContentCenter: NextPage = () => {
  return (
    <main className={styles.main}>
    <div className={styles.sectionContentCenter}>
    {/* Content for the centered section goes here */}
  
    <div className={`${styles.cardRowFive}`}>
      {/* Use the new cardFive class for a 5-card row */}
      <a className={styles.cardFive}>
        <Image className={`${styles.contentImage}`} src={sport1} alt="React Image" />
        <h2>Real Madrid winning it all</h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={sport3} alt="React Image" />
        <h2>Man City dominating</h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={sport2} alt="React Image" />
        <h2>Young Messi </h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>

      <a className={styles.cardFive}>
        <Image className={`${styles.contentImage}`} src={sport4} alt="React Image" />
        <h2>SIUUUUUUU</h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={sport5} alt="React Image" />
        <h2>Icardi cold as ice 🥶</h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>

      <a className={styles.cardFive} href="sports">
        <Image className={`${styles.contentImage}`} src={sport6} alt="React Image" />
        <h2>Mbappe the turtle 🐢</h2>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Tip me</button>
          <input className={styles.inputNumber} placeholder="＄ETH" />
        </div>
      </a>
      {/* Add more cards as needed */}
    </div>
  </div>
  </main>
  )
}

export default SectionContentCenter;