import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'


const SectionContent: NextPage = () => {
    return (
        <div>
            <main className={styles.main}>
            <div className={styles.sectionContentLeft}>
                <h2 className={styles.sectionHeader}>Categories</h2>
                <div className={styles.grid}>
                    {/* Card elements go here */}

                    <a className={styles.card} href="sports">
                        <img className={`${styles.categoryImage}`} src="https://prod-media.beinsports.com/image/1685790570208_a9f1f323-a764-4b24-aa40-1c1c71f4744b.jpg" alt="React Image" />
                        <h2>Sports</h2>
                    </a>

                    <a className={styles.card} href="animals">
                        <img className={`${styles.categoryImage}`} src="https://i.insider.com/61cc84b94710b10019c77960?width=700" alt="React Image" />
                        <h2>Communities</h2>
                    </a>

                    <a className={styles.card} href="cinema">
                        <img className={`${styles.categoryImage}`} src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2014/01/wolf_wall_street2.jpg" alt="React Image" />
                        <h2>Cinema</h2>
                    </a>

                    <a className={styles.card} href="https://rainbowkit.com">
                        <img className={`${styles.categoryImage}`} src="https://i.insider.com/5dc9a75b3afd3743e40c2bf7?width=1000&format=jpeg&auto=webp" alt="React Image" />
                        <h2>Gaming</h2>
                    </a>

                    <a className={styles.card} href="https://rainbowkit.com">
                        <img className={`${styles.categoryImage}`} src="https://media.newyorker.com/photos/59096fdb8b51cf59fc422485/16:9/w_1280,c_limit/Hsu-When-Politicians-Make-Playlists.jpg" alt="React Image" />
                        <h2>Politics</h2>
                    </a>




                    {/* Add more card elements as needed */}

                </div>
            </div>
            <div className={styles.sectionContentRight}>
            <h2 className={styles.sectionHeader}>
            Ongoing Competitions
            <Link href='competition'><button  className={styles.joinButton}>Create Competition</button></Link>
          </h2>
                <div className={styles.grid}>
                    {/* Card elements go here */}

                    <a className={styles.card} href="apecoinCompetition">
                        <img className={`${styles.competitionImage}`} src="https://www.zdnet.com/a/img/resize/df5593ce896b095c1fee4205e81d6b7d0ad91caf/2022/03/17/cf9fc378-5f1a-45b2-8c2c-1f54483e9932/apecoin.png?auto=webp&fit=crop&height=1200&width=1200" alt="React Image" />
                        <h2>Apecoin DAO</h2>
                        <p>10000 ＄APE in prizes</p>
                    </a>
                    
                    <a className={styles.card} href="nouns">
                        <img className={`${styles.competitionImage}`} src="https://unblock.net/wp-content/uploads/2021/11/nouns-dao-review.png" alt="React Image" />
                        <h2>Nouns DAO</h2>
                        <p>10000 ＄NOUNS in prizes</p>
                    </a>
                    <a className={styles.card} href="">
                        <img className={`${styles.competitionImage}`} src="https://l2beat.com/icons/optimism.png" alt="React Image" />
                        <h2>Optimism</h2>
                        <p>10000 ＄OP in prizes</p>
                    </a>
                    <a className={styles.card} href="">
                        <img className={`${styles.competitionImage}`} src="https://www.socios.com/wp-content/uploads/2019/11/Favicon-1-300x300.png" alt="React Image" />
                        <h2>Socios</h2>
                        <p>10000 ＄GAL in prizes</p>
                    </a>

                    





                    {/* Add more card elements as needed */}

                </div>
            </div>
            </main>

        </div>
      
    )
};

export default SectionContent;