import styles from '../../../styles/styles.module.css';
import img1 from './assets/imgs/1.png'
import pdf1 from './assets/pdfs/indexing.pdf'

import img2 from './assets/imgs/2.png'
import pdf2 from './assets/pdfs/p297-o_neil.pdf'

import img3 from './assets/imgs/3.png'
import pdf3 from './assets/pdfs/tempest.pdf'

import img4 from './assets/imgs/4.png'
import pdf4 from './assets/pdfs/UCAM-CL-TR-574.pdf'

import { useEffect } from 'react';


export const ShowPapers = (props) => {
  const title = "Research Papers";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1>Papers to read when bored</h1>
      <hr></hr>
      <br></br>
      <br></br>

      <div className={styles.individual_book}>
        <img src={img1} className={styles.book_img} />
        <div>
          <a href={pdf1}><h1>ORGANIZATION AND MAINTENANCE OF LARGE
            ORDERED INDICES
            by
            R. Bayer
            and
            E. McCreight</h1>
          </a>
        </div>
        <div>
        </div>
      </div>
      <hr></hr>

      <div className={styles.individual_book}>
        <img src={img2} className={styles.book_img} />
        <div>
          <a href={pdf2}><h1>The LRU-K Page Replacement Algorithm For Database Disk Buffering</h1>
          </a>
        </div>
        <div>
        </div>
      </div>
      <hr></hr>

      <div className={styles.individual_book}>
        <img src={img3} className={styles.book_img} />
        <div>
          <a href={pdf3}><h1>TEMPEST: A Signal Problem</h1>
          </a>
        </div>
        <div>
        </div>
      </div>
      <hr></hr>

      <div className={styles.individual_book}>
        <img src={img4} className={styles.book_img} />
        <div>
          <a href={pdf4}><h1>Sketchpad: A man-machine graphical
            communication system by
            Ivan Edward Sutherland</h1>
          </a>
        </div>
        <div>
        </div>
      </div>
      <hr></hr>

    </>
  );
}