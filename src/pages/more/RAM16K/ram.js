import styles from './styles.module.css';
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'
import five from './img/five.png'
import six from './img/six.png'
import seven from './img/seven.png'
import eight from './img/eight.png'

export const ShowRam = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>RAM from scrach</h1>
       
       
            <hr></hr>
            <div className={styles.book_content}></div>
            <h1><u>Making 16k RAM(NandToTetris)</u></h1>
           <h2>D Flip Flop is building block of RAM.
D Flip Flop can remember one bit at a time.</h2>
<h2>here is the basic logic gate diagram of a DFF.</h2>
<div className={styles.img_container}>
          <img src={one}/>
  </div>
<h2>here is a DFF

whenever the clock is high, the input at D is recored at Q and doesn't change unless D changes.

instead of a clock we can use a load bit, so the output only changes when we want to load something through load bit.

here is the circuit diagram:
</h2>
          <div className={styles.img_container}>
          <img src={two}/>
  </div>
  <h2>whenver the load is on, we take input from D and when load is Off, Q is stays same no matter what.
</h2>
 <h2>In the course the DFF we are provided with is the first one, the one with clock, to make a one-bit register we have to add a Mux to it, we are not using the second example with load bit as we are making changes to existing DFF internally in it.</h2>
           <h2>here is the Mux (2:1) that we will integrate into existing circuit to make a one bit Register.</h2>
           <div className={styles.img_container}>
          <img src={three}/>
  </div>  
  <h2>and here is the on-bit register</h2>

  <div className={styles.img_container}>
          <img src={four}/>
  </div>
            </div>
          </div>
        </div>
      );
}


