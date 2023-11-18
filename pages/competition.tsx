import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from './components/Header';

import React from 'react'

const Competition: NextPage = () => {
    return (
        <div className={styles.container}>
            
            <Header />

            <main className={styles.main}>
                <div className={styles.sectionContentLeft}>
                    <h2 className={styles.sectionHeader}>Categories</h2>
                    <div className={styles.grid}>
                        {/* Card elements go here */}

                        <a className={styles.card} href="sports">
                            <img className={`${styles.categoryImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
                            <h2>Sports</h2>
                        </a>

                        <a className={styles.card} href="https://rainbowkit.com">
                            <img className={`${styles.categoryImage}`} src="https://i.pinimg.com/originals/c2/5a/a7/c25aa7f3fe1b3dd244dfe43580f7fec8.jpg" alt="React Image" />
                            <h2>Hayvanlar Alemi</h2>
                        </a>

                        <a className={styles.card} href="https://rainbowkit.com">
                            <img className={`${styles.categoryImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
                            <h2>Sports</h2>
                        </a>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
                    Made with ❤️ by YOURRAK
                </a>
            </footer>
        </div>

    )
}

export default Competition;

