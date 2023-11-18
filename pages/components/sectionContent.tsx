import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';


const SectionContent: NextPage = () => {
    return (
        <div>
            <main className={styles.main}>
            <div className={styles.sectionContentLeft}>
                <h2 className={styles.sectionHeader}>Categories</h2>
                <div className={styles.grid}>
                    {/* Card elements go here */}

                    <a className={styles.card} href="sports">
                        <img className={`${styles.categoryImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
                        <h2>Sports</h2>
                    </a>

                    <a className={styles.card} href="animals">
                        <img className={`${styles.categoryImage}`} src="data:image/jpeg;base64,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" alt="React Image" />
                        <h2>Hayvanlar Alemi</h2>
                    </a>

                    <a className={styles.card} href="cinema">
                        <img className={`${styles.categoryImage}`} src="https://images.squarespace-cdn.com/content/v1/56fb3615f8508278fbc2a7a9/1613516454940-NNMWH2SZJIJBCGXDPPIZ/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg" alt="React Image" />
                        <h2>Cinema</h2>
                    </a>

                    <a className={styles.card} href="https://rainbowkit.com">
                        <img className={`${styles.categoryImage}`} src="https://pbs.twimg.com/media/FGA6esuXsAYaBrJ.jpg" alt="React Image" />
                        <h2>Chess</h2>
                    </a>

                    <a className={styles.card} href="https://rainbowkit.com">
                        <img className={`${styles.categoryImage}`} src="https://media.newyorker.com/photos/59096fdb8b51cf59fc422485/16:9/w_1280,c_limit/Hsu-When-Politicians-Make-Playlists.jpg" alt="React Image" />
                        <h2>Politics</h2>
                    </a>




                    {/* Add more card elements as needed */}

                </div>
            </div>
            <div className={styles.sectionContentRight}>
                <h2 className={styles.sectionHeader}>Ongoing Competitions</h2>
                <div className={styles.grid}>
                    {/* Card elements go here */}

                   
                    <a className={styles.card} href="competition">
                        <img className={`${styles.categoryImage}`} src="data:image/jpeg;base64,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" alt="React Image" />
                        <h2>Hayvanlar Alemi</h2>
                    </a>
                    
                    <a className={styles.card} href="https://rainbowkit.com">
                        <img className={`${styles.categoryImage}`} src="https://media.newyorker.com/photos/59096fdb8b51cf59fc422485/16:9/w_1280,c_limit/Hsu-When-Politicians-Make-Playlists.jpg" alt="React Image" />
                        <h2>Politics</h2>
                    </a>
                    <a className={styles.card} href="">
                        <img className={`${styles.categoryImage}`} src="https://images.squarespace-cdn.com/content/v1/56fb3615f8508278fbc2a7a9/1613516454940-NNMWH2SZJIJBCGXDPPIZ/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg" alt="React Image" />
                        <h2>Cinema</h2>
                    </a>

                    

                    <a className={styles.card} href="sports">
                        <img className={`${styles.categoryImage}`} src="https://www.si.com/.image/t_share/MTY4MTkyNDA1NjQzMzM5NjQ5/arda-turan-throws-shoe-referee-video.png" alt="React Image" />
                        <h2>Sports</h2>
                    </a>





                    {/* Add more card elements as needed */}

                </div>
            </div>
            </main>

        </div>
      
    )
};

export default SectionContent;