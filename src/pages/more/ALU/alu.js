import { useEffect } from 'react';
import IssueBanner from '../../../main_components/issue_banner';
import styles from '../../../styles/styles.module.css';
import ALU from './img/ALU.png';
import table from './img/table.png';

export const ShowAlu = (props) => {
  const title = "ALU from scrach";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <div className={styles.book_content}></div>
      <h1><u>Making a basic ALU from scrach (Part of NandToTetris)</u></h1>
      <h2>An ALU is an component of CPU, its primary purpose is to do calculations.The ALU that we are writing is an very basic ALU</h2>

      <h2>It's designed to work with 16 bit inputs.</h2>
      <h2>we have 6 control bits, that control how the inputs will be processed, and we have two control output bits (zr and ng).</h2>

      <div className={styles.img_container}>
        <img src={ALU} />
      </div>


      <ul>
        <li><h2>zx: if set to 1, zero the x input</h2></li>
        <li> <h2>nx: if set to 1, negate the x input</h2></li>
        <li> <h2>zy: if set to 1, zero the y input</h2></li>
        <li> <h2>ny: if set to 1, negate the y input</h2></li>
        <li> <h2>f: if set to 1, do a+b. if set to 0, do a&b</h2></li>
        <li> <h2>no: if set to 1, negate output</h2></li>
        <h2>zr and ng tells us about the output.</h2>
        <li><h2>if the output is zero, zr should be set to 1.</h2></li>
        <li><h2>if output is a negative number ng should be set to 1.</h2></li>
      </ul>
      <h2>Using these control bits we can do certain operation by combining those.
        here is a table of the capabilites of this ALU</h2>

      <div className={styles.img_container}>
        <img src={table} />
      </div>
      <h2>we can do OR,AND,SUB,ADD,ADD BY 1, SUB BY 1,NEGATION, and more.</h2>
      <h1>Designing it.</h1>
      <h2>The main component of our design will be a multiplexer.</h2>
      <h2>A multiplexer takes 2^n input, and with help of n select pins, selects one of the input and outputs it. It can use used as if and else at gate level. for example if zx is set we makes x zero. Using a Mux we can have x and false(16 bits that are 0) as input and use zx as select pin. is zx is 1, 0 will be output, else the original x.</h2>
      <h2>Using many multiplexers we can make all the decisions in respect to control bits.
        The chips we will be using:</h2>
      <ul>
        <h2><li>Mux16: 2:1 multiplexer that takes two 16 bits input.</li></h2>
        <h2><li>Add16: A adder made of half and full adder that can add two 16 bit number.</li></h2>
        <h2><li>Not16: Negates 16 bit input.</li></h2>
        <h2><li>And16: And gate that takes two 16 bit input and does bitwise and operation on them.</li></h2>
        <h2><li>Or6Way: A single input chip that takes 6 bits and performs or operation on them.</li></h2>
        <h2><li>Or:A OR gate that does Or opearation on two bits.</li></h2>
        <h2><li>Not: A Not gate, that negates the single input provided.</li></h2>

      </ul>
      <h2>Using HDL(Hardware Desc Language) we can implement all this.

        here is the code:</h2>
      <div className={styles.code_background}>
        <h2>{code}</h2>
      </div>
      <h1><u>Explanation</u></h1>
      <h2>With Mux we takes care of control bits zx and zy, then we calculate the negation of both X1 and Y1(the values are based on value of zx and zy). after we calculate the negation we use Mux for both values to take in account the value of nx and ny, depending on value of those two we negate or dont negate the values. after that we calculate the AND and ADD of both
        the values, and using another Mux and `f` as selection bit, we calculate the output, and then we do negation and at last we use another Mux and pass the value that was dependent on control bit:f and negated value, now the control bit: no will determine the final value of output.
        After this we take care of the control output bits, all the values are in 2's compliment, negative number will always have thier MSB as 1, we set the `ng` to that value.
        At the end using two Or8Way gate we do OR operation on every bit and negate it and set it to zr.
      </h2>
    </>
  );
}

const code = `CHIP ALU {
  IN  
      x[16], y[16],  // 16-bit inputs        
      zx, // zero the x input?
      nx, // negate the x input?
      zy, // zero the y input?
      ny, // negate the y input?
      f,  // compute out = x + y (if 1) or x & y (if 0)
      no; // negate the out output?

  OUT 
      out[16], // 16-bit output
      zr, // 1 if (out == 0), 0 otherwise
      ng; // 1 if (out < 0),  0 otherwise

  PARTS:
  Mux16(a=x,b=false,sel=zx,out=X1);
  Mux16(a=y,b=false,sel=zy,out=Y1);
  Not16(in=X1,out=NotX1);
  Not16(in=Y1,out=NotY1);
  Mux16(a=X1,b=NotX1,sel=nx,out=X2);
  Mux16(a=Y1,b=NotY1,sel=ny,out=Y2);
  Add16(a=X2,b=Y2,out=addXY);
  And16(a=X2,b=Y2,out=andXY);
  Mux16(a=andXY,b=addXY,sel=f,out=XY);
  Not16(in=XY,out=nXY);
  Mux16(a=XY,b=nXY,sel=no,out[15]=ng,out[0..7]=oL,out[8..15]=oR,out=out);
  Or8Way(in=oL,out=firstOR);
  Or8Way(in=oR,out=secondOR);
  Or(a=firstOR,b=secondOR,out=xzr);
  Not(in=xzr,out=zr);
}`;
