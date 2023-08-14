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
  <h2>The HDL of is is:</h2>
  <div className={styles.code_background}>
  {code_1}
</div>


<h2>Now building a 16 bit register.

we can use 16 of these one bit d flip flops to build one 16 bit register.

the HDL code:</h2>
<div className={styles.code_background}>
   {code_2}
</div>
<h2>bit here is the one bit register we made, we pass same load to each one bit dff and same load to each. and we get a 16 bit register.
here is logic gate diagram</h2>
<div className={styles.img_container}>
          <img src={five}/>
  </div>
  <br></br>
  <div className={styles.img_container}>
          <img src={six}/>
  </div>
  <br></br>
  <div className={styles.img_container}>
          <img src={seven}/>
  </div>
  <br></br>
 <h2>
 Now we have a 16 bit register, we can start on to build RAM.
we will start with RAM8(8 register)

A 16 register ram will consist of 8 16 bit register, one load bit for reading and writing operation, and a address line(k) where k will be log2(n), where n is number of register, in our case k = 3(3 address line to select the register)

here is the diagram of the ram
 </h2>
 <div className={styles.img_container}>
          <img src={eight}/>
  </div>
  <h2>now with basic gates and components we can build this, first using a demux we can pass on the load bit to the appropriate register, then using a mux we can pass the output.</h2>
       <ol>
        <h2><li>Demux to pass the load bit</li></h2>
        <h2><li>Mux to pass the output</li></h2>
       </ol>    
       <h2>
       the input of each register will be cconnected to the input we get, only that register will write which as load bit through Demux, and only that register will be output that we select using Mux.
here is the HDL code for it.
       </h2>
       <div className={styles.code_background}>
   {code_3}
</div>
<h2>Now we need to scale this to a RAM with 64 Register, that means we need more registers and Dmux and Mux with larger output and input pins, or we can use the ram we build earlier, 8 of them.

using properties of binary maths we can easily do this.
we can stack 8 RAM 8 and connect there input to a DeMux(8:1) the select pins will be 3 and they will take address from 3 to 5th bit, why?</h2>
        <h2>For 0th to 7th register, the output from demux will always be first RAM then in the ram we will pass adress from 0th to 2nd bit, 2 bits can cover 3 combination that can be used to select 8 registers.
</h2>  
          <h2>For 8th to 15th register, the output from deMux will always be second RAM, as the 3th bit will always be 1, and then in the RAM8 the address line will be function of 0th to 2nd bit from address line, which would help select one of the 8 register.</h2>
          <h2>and same way other specific register can be selected.

after that we can use a mux(8) to get output from one of the RAM8.

HDL code for that:</h2>
<div className={styles.code_background}>
   {code_4}
</div>
<h2>
Now to build RAM512 we can use 8 RAM64.
RAM512 has 9 select pins and RAM64 has 6 select pins.
we can stack 8 RAM64 to build a RAM512 and build RAM512 with on top of RAM64
</h2>
<div className={styles.code_background}>
   {code_5}
</div>
<h2>the bits 6th to 8th help us select the individual RAM64 from 8 of them, then bits 0th to 5th in there address line help us select the individual RAM16 and then 0th to 2nd bit is used to select the individual register.
</h2>
<h2>RAM4k(4096)</h2>
<h2>same way like we did before, we can use 8 RAM512
for a RAM4k we have 12 select bits.
hdl code for RAM4k:</h2>
<div className={styles.code_background}>
   {code_6}
</div>
<h2>using 9th to 11th bit we select the one of eight RAM512 and then we pass the 0th to 8th bit to narrow down the register that we want to select, just like we did before.</h2>
          <h2>Now at last RAM16k
using 4 RAM4k we can make this,
the number of select pins will be log2(16384) = 14.</h2>
          <h2>we need to use dmux(4:1) and Mux(1:4 , 16 bit) and 4 RAM4K and configure the select pins.
here is the code </h2>
<div className={styles.code_background}>
   {code_7}
</div>
<h2>
using 12th to 12th bit(2 bits) we can select one of the four RAM4k and we pass 0th to 11th bit to narrow down the register that we want to select.
</h2>
            </div>
          </div>
        </div>
      );
}


const code_1 = `CHIP Bit {
  IN in, load;
  OUT out;

  PARTS:
  Mux(a=ax,b=in,sel=load,out=X);
  DFF(in=X,out=out,out=ax);
}`;

const code_2 = `CHIP Register {
  IN in[16], load;
  OUT out[16];

  PARTS:
Bit(in=in[0],load=load,out=out[0]);
Bit(in=in[1],load=load,out=out[1]);
Bit(in=in[2],load=load,out=out[2]);
Bit(in=in[3],load=load,out=out[3]);
Bit(in=in[4],load=load,out=out[4]);
Bit(in=in[5],load=load,out=out[5]);
Bit(in=in[6],load=load,out=out[6]);
Bit(in=in[7],load=load,out=out[7]);
Bit(in=in[8],load=load,out=out[8]);
Bit(in=in[9],load=load,out=out[9]);
Bit(in=in[10],load=load,out=out[10]);
Bit(in=in[11],load=load,out=out[11]);
Bit(in=in[12],load=load,out=out[12]);
Bit(in=in[13],load=load,out=out[13]);
Bit(in=in[14],load=load,out=out[14]);
Bit(in=in[15],load=load,out=out[15]);
}`;
const code_3 = `CHIP RAM8 {
  IN in[16], load, address[3];
  OUT out[16];

  PARTS:
  DMux8Way(in=load,sel=address,a=a,b=b,c=c,d=d,e=e,f=f,g=g,h=h);
  Register(in=in,load=a,out=one);
  Register(in=in,load=b,out=two);
  Register(in=in,load=c,out=three);
  Register(in=in,load=d,out=four);
  Register(in=in,load=e,out=five);
  Register(in=in,load=f,out=six);
  Register(in=in,load=g,out=seven);
  Register(in=in,load=h,out=eight);
  Mux8Way16(a=one,b=two,c=three,d=four,e=five,f=six,g=seven,h=eight,sel=address,out=out);

}`;
const code_4 = `CHIP RAM64 {
  IN in[16], load, address[6];
  OUT out[16];

  PARTS:
  DMux8Way(in=load,sel=address[3..5],a=a,b=b,c=c,d=d,e=e,f=f,g=g,h=h);
  RAM8(in=in,load=a,address=address[0..2],out=one);
  RAM8(in=in,load=b,address=address[0..2],out=two);
  RAM8(in=in,load=c,address=address[0..2],out=three);
  RAM8(in=in,load=d,address=address[0..2],out=four);
  RAM8(in=in,load=e,address=address[0..2],out=five);
  RAM8(in=in,load=f,address=address[0..2],out=six);
  RAM8(in=in,load=g,address=address[0..2],out=seven);
  RAM8(in=in,load=h,address=address[0..2],out=eight);
  Mux8Way16(a=one,b=two,c=three,d=four,e=five,f=six,g=seven,h=eight,sel=address[3..5],out=out);
}`;
const code_5 = `CHIP RAM512 {
  IN in[16], load, address[9];
  OUT out[16];

  PARTS:
  DMux8Way(in=load,sel=address[6..8],a=a,b=b,c=c,d=d,e=e,f=f,g=g,h=h);
  RAM64(in=in,load=a,address=address[0..5],out=one);
  RAM64(in=in,load=b,address=address[0..5],out=two);
  RAM64(in=in,load=c,address=address[0..5],out=three);
  RAM64(in=in,load=d,address=address[0..5],out=four);
  RAM64(in=in,load=e,address=address[0..5],out=five);
  RAM64(in=in,load=f,address=address[0..5],out=six);
  RAM64(in=in,load=g,address=address[0..5],out=seven);
  RAM64(in=in,load=h,address=address[0..5],out=eight);
  Mux8Way16(a=one,b=two,c=three,d=four,e=five,f=six,g=seven,h=eight,sel=address[6..8],out=out);
}`;
const code_6 = `CHIP RAM4K {
  IN in[16], load, address[12];
  OUT out[16];

  PARTS:
  DMux8Way(in=load,sel=address[9..11],a=a,b=b,c=c,d=d,e=e,f=f,g=g,h=h);
  RAM512(in=in,load=a,address=address[0..8],out=one);
  RAM512(in=in,load=b,address=address[0..8],out=two);
  RAM512(in=in,load=c,address=address[0..8],out=three);
  RAM512(in=in,load=d,address=address[0..8],out=four);
  RAM512(in=in,load=e,address=address[0..8],out=five);
  RAM512(in=in,load=f,address=address[0..8],out=six);
  RAM512(in=in,load=g,address=address[0..8],out=seven);
  RAM512(in=in,load=h,address=address[0..8],out=eight);
  Mux8Way16(a=one,b=two,c=three,d=four,e=five,f=six,g=seven,h=eight,sel=address[9..11],out=out);
}    `;

const code_7 = `CHIP RAM16K {
  IN in[16], load, address[14];
  OUT out[16];

  PARTS:
  DMux4Way(in=load,sel=address[12..13],a=a,b=b,c=c,d=d);
  RAM4K(in=in,load=a,address=address[0..11],out=one);
  RAM4K(in=in,load=b,address=address[0..11],out=two);
  RAM4K(in=in,load=c,address=address[0..11],out=three);
  RAM4K(in=in,load=d,address=address[0..11],out=four);
  Mux4Way16(a=one,b=two,c=three,d=four,sel=address[12..13],out=out);
}`;