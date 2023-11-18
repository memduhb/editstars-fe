import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';


const Sports: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />

      <main className={styles.main}>
        <div className={styles.sectionContentCenter}>
          {/* Content for the centered section goes here */}

          <div className={`${styles.cardRowFive}`}>
            {/* Use the new cardFive class for a 5-card row */}
            <a className={styles.cardFive}>
              <img className={`${styles.contentImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
              <h2>Arda Turan throwing shoe</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>

            <a className={styles.cardFive} href="sports">
              <img className={`${styles.contentImage}`} src="https://i.pinimg.com/originals/c2/5a/a7/c25aa7f3fe1b3dd244dfe43580f7fec8.jpg" alt="React Image" />
              <h2>Cristiano Ronaldo grinning</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>

            <a className={styles.cardFive} href="sports">
              <img className={`${styles.contentImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
              <h2>Messi looking at the scoreboard</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>

            <a className={styles.cardFive}>
              <img className={`${styles.contentImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
              <h2>Emeghara taca atıyo topu</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>

            <a className={styles.cardFive} href="sports">
              <img className={`${styles.contentImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
              <h2>Icardi Recep İvedik transition</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>

            <a className={styles.cardFive} href="sports">
              <img className={`${styles.contentImage}`} src="data:image/jpeg;base64,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" alt="React Image" />
              <h2>Hamınada mamınada</h2>
              <div className={styles.cardActions}>
                <button className={styles.cardButton}>Tip me</button>
                <input className={styles.inputNumber} placeholder="＄ETH" />
              </div>
            </a>
            {/* Add more cards as needed */}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by YOURRAK
        </a>
      </footer>
    </div>
  );
};

export default Sports;