import styles from '../../../styles/styles.module.css'
import FormatCode from "../../../main_components/code_formatter"
import SubHeading from "../../../main_components/sub_heading"
import { useEffect } from 'react';
import Computer from "./imgs/computer.png"
import CPU from "./imgs/cpu.png"


export const ShowComputer = (props) => {
  const title = "Assembling computer with previous components";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h2>This computer is assemlbed using previous components that we made, namely:
        <h2>1. RAM</h2>
        <h2>2. CPU</h2>
        <h2>3. ROM</h2>
      </h2>
      <h2>Here is top level design of the Computer as whole:</h2>
      <div className={styles.img_container}>
        <img src={Computer} />
      </div>
      <h2>ROM
        This will store our program, that would be written in HACK programming language, Its output is feed into the CPU that we built, the instruction changes the state of the CPU(setting computing bits, flag bits, writing to memory)
        As we know The instruction can be of two type:</h2>
      <h2>Type A: <h2 style={{ color: "red" }}>`@10`</h2></h2>
      <h2>this instruction will look like this in machine langauge: <h2 style={{ color: "red" }}>`0000 0000 0000 1010`</h2>
        and it would change the set value in Register A that is located in CPU to 10.
        Here how the CPU looks like:</h2>



      <div className={styles.img_container}>
        <img src={CPU} />
      </div>

      <h2>As we have coded in the CPU, seeing the instruction is of type A it will fetch the data from 10th register in RAM, and in next cycle we will get it as input in CPU, Thats how CPU is interacting with the RAM.</h2>
      <h2>ROM input is from CPU, using a Program counter we fetch the next or if its a loop we fetch the previous instruction.</h2>
      <SubHeading
        text={"Handling I/O"}
        size={20}
        start_color={"#ADD8E6"}
        end_color={"#000080"}
      />
      <h2>We handle the IO by allocating a memory space in RAM: 8k for Screen and one bit for Keyboard.
        The Memory location would be hardcoded.</h2>
      <h2>The instruction would manipulate the screen memory map to draw on screen, </h2>
      <h2>and for input(only keyboard currently) we resverse one bit in RAM, which would store the code for any key that is being pressed, this way we can write program that can query that location to check what is the input.</h2>
      <h2>Example of program that can query the Memeory for input and output:
        <a href='https://github.com/aakarshan-raj/NandToTetris_solution/blob/main/04/fill/Fill.asm'>Assembly program to manipulate I/O</a></h2>
      <h2>Link to memory chip:
        <a href='https://github.com/aakarshan-raj/NandToTetris_solution/blob/main/05/Memory.hdl'>HDL Memeory Chip</a></h2>
      <h2>Our memory takes input from CPU, we can either write or read from memory depending on load bit.</h2>

      <FormatCode
        code={code_1}
      />

      <h2>using selection bit we direct out input from CPU to RAM or Screen memory, and using same selection bits we direct the output back to CPU. this complete the instruction cycle of fetching a instruction from the ROM and executing .
      </h2>
      <h2>Code for the Computer:</h2>
      <FormatCode
        code={code_2}
      />
    </>
  );
}

const code_1 = `DMux4Way(in=load, sel=address[13..14], a=toRamDup, b=toRam,        c=toScreen, d=toKey);
Or(a=toRam, b=toRamDup, out=ramload);
RAM16K(in=in,load=ramload,address=address[0..13],out=rout);
Screen(in=in,load=toScreen,address=address[0..12],out=sout);
Keyboard(out=kout);

Mux4Way16(a=rout, b=rout, c=sout, d=kout, sel=address[13..14], out=out);`;
const code_2 = `CHIP Computer {

  IN reset;

  PARTS:

  ROM32K(address=toROM,out=toCPU);
  CPU(inM=toCpuMemory,instruction=toCPU,reset=reset,outM=outInRam,writeM=loadInRam,addressM=addressInRam,pc=toROM);
  Memory(in=outInRam,load=loadInRam,address=addressInRam,out=toCpuMemory);
}`;