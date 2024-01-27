import styles from '../../styles/styles.module.css';
import ImgBook1 from './assets/book1.jpg'
import ImgBook2 from './assets/book2.jpg'
import ImgBook3 from './assets/book3.jpeg'
import ImgBook4 from './assets/book4.jpg'
import IssueBanner from '../../../src/main_components/issue_banner'


export const ShowBooks = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Book</h1>
          <hr></hr>
          <div className={styles.individual_book}>
            <img src={ImgBook1} className={styles.book_img} />
            <div>
              <h1>  Practical Binary Analysis</h1>
            </div>
            <div>
              <h2>pretty good and updated book on binary analysis(status and dynamic), would recommend to read if you are interested in binary analysis</h2>
            </div>

          </div>
          <hr></hr>

          <div className={styles.individual_book}>
            <img src={ImgBook2} className={styles.book_img} />
            <div>
              <h1>  Rust Atmoic and Locks</h1>
            </div>
            <div>
              <h2>Extremelly well written book on rust concurrency and concurrency in genral, you will need some understanding of rust to follow along</h2>
            </div>
          </div>
          <hr></hr>

          <div className={styles.individual_book}>
            <img src={ImgBook3} className={styles.book_img} />
            <div>
              <h1>Introduction to algorithms</h1>
            </div>
            <div>
              <h2>Covers Introduction to algorithms in formal way, must read to understand things intuitively in CS</h2>
            </div>
          </div>
          <hr></hr>

          <div className={styles.individual_book}>
            <img src={ImgBook4} className={styles.book_img} />
            <div>
              <h1>Hypermedia systems</h1>
            </div>
            <div>
              <h2>Tired of SPA? This might be good place to start understanding Hypermedias and get to know the real REST(Its not JSON API's)</h2>
            </div>
          </div>
          <hr></hr>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}