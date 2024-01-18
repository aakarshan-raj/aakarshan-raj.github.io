import IssueBanner from '../../../main_components/issue_banner';
import styles from '../../../styles/styles.module.css'
import FormatCode from "../../../main_components/code_formatter"
import SubHeading from "../../../main_components/sub_heading"

import cpu from "../CPU/img/cpu.png"
import alu from "../CPU/img/alu.png"
import alu_table from "../CPU/img/alu_chart.png"
import bits from "../CPU/img/bits.png"
import dregister from "../CPU/img/dregister.png"
import cpu_chart from "../CPU/img/cpu_chart.png"
import cpu_contract from "../CPU/img/cpu_contract.png"

export const ShowCPU = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Implementing a CPU</h1>
          <hr></hr>
          <h1>Design of the CPU:</h1>
          <div className={styles.img_container}>
            <img src={cpu} />
          </div>

          <h2>The initial design consists of:</h2>
          <ol>
            <h2><li>2 Mux16</li></h2>
            <h2><li>2 Registers</li></h2>
            <h2><li>Program Counter</li></h2>
            <h2><li>ALU</li></h2>
          </ol>

          <h2>Using these plus some extra hardware that will handle the control bits, we can make a CPU.</h2>

          <SubHeading
            text={"Machine Language For CPU"}
            size={30}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />

          <h2>Machine language and CPU architecture are tightly coupled to the extent that the machine code designed for one hardware won't run on another hardware that has a different architecture. </h2>
          <h2>The CPU architecture is crafted to interpret and execute instructions encoded in a specific format or rule. This encoding rule governs how the CPU decodes the instruction bits. As a result, machine code written for one architecture relies on this encoding rule, and if executed on hardware with a different architecture, the CPU wouldn't understand or correctly interpret the instructions due to the mismatch in encoding and decoding mechanisms.</h2>
          <h2>Machine language specification:</h2>

          <h2>The instructions will be 16 bits long</h2>
          <h2>For a higher level perspective we have a assembly language too that has mnemonic's for each machine language instruction, when we program we program in that assembly language, but to make our CPU we need to understand the machine codes.</h2>


          <SubHeading
            text={"Hack Assembly Language Specification:"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <h2>Two types of instruction:<br />
            1. Type A<br></br>
            2. Type C</h2>

          <SubHeading
            text={"A Instruction:"}
            size={20}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <br />
          <SubHeading
            text={"@value"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          />
          <h2>Value would always be  non-negative</h2>

          <h2>It would have following effect on the CPU:</h2>

          <h2>
            1. Load value into A register<br />
            2. Select the register from memory : memory[
            <SubHeading
              text={"value"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            />
            ]
          </h2>

          <SubHeading
            text={"C Instruction:"}
            size={20}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <br />
          <SubHeading
            text={"dest = comp ; jump"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          />
          <h2>
            dest possible values:<br /><br />
            1. null<br />
            2. M<br />
            3. D<br />
            4. MD<br />
            5. A<br />
            6. AM<br />
            7. AD<br />
          </h2>

          <h2>comp possible values:<br /><br />
            1. 0<br />
            2. 1<br />
            3. -1<br />
            4. D<br />
            5. A<br />
            6. !D<br />
            7. !A<br />
            8. -D<br />
            9. -A<br />
            10. D+1<br />
            11. A+1<br />
            12. D-1<br />
            13. A-1<br />
            14. D+A<br />
            15. D-A<br />
            16. A-D<br />
            17. D&A<br />
            18. D|A<br />
            19. M<br />
            20. !M<br />
            21. -M<br />
            22. M+1<br />
            23. M-1<br />
            24. D+M<br />
            25. D-M<br />
            26. M-D<br />
            27. D&M<br />
            28. D|A<br />
          </h2>

          <h2>
            jump possible values:<br /><br />
            1. null<br />
            2. GJT<br />
            3. JEQ<br />
            4. JGE<br />
            5. JLT<br />
            6. JNE<br />
            7. JLE<br />
            8. JMP<br />
          </h2>
          <h2>Example:</h2>

          <FormatCode
            code={code_1}
          />
          <h2>This Language is Turing complete.</h2>
          <h2>Using only these two types of instruction (16 bits) we can write games, OS, Simulations and many more things.</h2>



          <SubHeading
            text={"The Machine codes for Instructions:"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <h2>For type A instruction the first bit would be 0, which would indicate its a Type A instruction, and it would be followed by 15 bit value.</h2>
          <h2>For type C instruction the first bit would be 1, indicating its a type C instruction.</h2>
          <h2>2 and 3 bit are not used for anything yet.</h2>
          <h2>4 to 10th bit are for specifying the computation.</h2>
          <h2>11th to 13ths bit are for specifying the destination.</h2>
          <h2>14th to 16th bits are for specifying the jump.</h2>

          <h2>Here is a chart that would help in understanding these codes:</h2>

          <div className={styles.img_container}>
            <img src={cpu_chart} />
          </div>
          <h2>Thats all the information about the machine language we need. Using this we can start working on CPU architecture.</h2>

          <h2>Contract of CPU:</h2>
          <div className={styles.img_container}>
            <img src={cpu_contract} />
          </div>

          <h2>3 input and 4 output, thats all we have to worry about currently, we dont have to worry from where the input would come from or where the outputs will go.</h2>

          <h2>For a Type A instruction, we just have to check the 1st bit of the 16 bit instruction and if its 0 meaning its a Type A instruction , we will load the value into A register by setting load bit of our A register to 1.</h2>

          <h2>Thats all for Type A.</h2>

          <h2>For Type C its more complicated cause we have many control bits, that control the state of our CPU, they specify which inputs will go to ALU, they decide if the Jump to certain location will occur or not.</h2>




          <SubHeading
            text={"Computation bits of Type C:"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />


          <br />
          <SubHeading
            text={"1 1 1 a c1 c2 c3 c4 c5 c6 d1 d2 d3 j1 j2 j3"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          />
          <h2>For that we can start to work on sub parts of the instructions:</h2>
          <h2>Lets start with computation bits, which are:
            <SubHeading
              text={" a c1 c2 c3 c4 c5 c6"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            />
          </h2>

          <h2>If we look at the table of machine codes for computation bits its clear that
            the <SubHeading
              text={"a"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> bit decide weather the input will be from A register or memory register
            and the first input would always be connected to D register:</h2>
          <div className={styles.img_container}>
            <img src={alu} />
          </div>


          <h2>
            Here the input to Mux16 are:<br /><br />
            1. A Register<br />
            2. Memory Register<br />
          </h2>

          <h2>we can feed the <SubHeading
            text={"a"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          /> bit into control bit of this Mux16.</h2>
          <h2>HDL Code:</h2>

          <FormatCode
            code={code_2}
          />

          <h2>
            <SubHeading
              text={"inM"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> is input to CPU , its the value that is selected
             from the memory,<SubHeading
              text={"instruction[12]"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> is <SubHeading
              text={"a"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> bit.
          </h2>

          <h2> Now what about the 6 bits?
            <SubHeading
              text={" c1 c2 c3 c4 c5 c6"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            />
          </h2>

          <h2>Thats the neat part, if we look at the control bits of ALU we have 6 control bits</h2>
          <div className={styles.img_container}>
            <img src={alu_table} />
          </div>

          <h2>
            We can match the control bits from machine code chart,
            computation field and this chart, they both match, so we can
            feed: <SubHeading
              text={" c1 c2 c3 c4 c5 c6"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> to control bits of ALU: <SubHeading
              text={"zx nx zy ny f no"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            />
          </h2>

          <SubHeading
            text={"Destination bits:"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <br />
          <SubHeading
            text={"d1 d2 d3"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          />

          <h2> These bits specify where the output of ALU would go,
            here the design of machine language is made so when its implemented on hardware its easy, we can see a pattern in the machine code specification of the destination bits:</h2>
          <ol>
            <h2><li>if d1 == 1, write to A Register</li></h2>
            <h2><li>if d2 == 1, write to D Register</li></h2>
            <h2><li>if d3 == 1, write to Memory</li></h2>

          </ol>

          <h2>
            If <SubHeading
              text={"d1 d2 d3 == 111"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> write to All three.
          </h2>


          <SubHeading
            text={"d1 bit:"}
            size={20}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />


          <h2>if d1 is 1 we have to write to A, There is one more condition when we write to A register, when its type A instruction:</h2>

          <h2>So two conditions when we write to A Register:</h2>


          <ol>
            <h2><li>For type A</li></h2>
            <h2><li>If d1 bit is set</li></h2>
          </ol>

          <h2>This logic can be coded with 2 Logic Gates, NOT and OR:</h2>

          <FormatCode
            code={code_3}
          />

          <h2>Note:</h2>
          <h2>The indexing is done from LSB to MSB here, so LSB would be 0th index</h2>


          <div className={styles.img_container}>
            <img src={bits} />
          </div>

          <h2>15th bit indexed is the first bit from instruction:</h2>

          <h2>In our HDL code we have connected first bit to a Not Gate so its reversed, as we would like to load the bits if its type A instruction(0).</h2>
          <h2>Then we are connecting that negated output and 5th indexed bit which is d1, So the logic is, if d1 is set or if its type A instruction load into A register.</h2>

          <h2>The output <SubHeading
            text={"AregControl"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          /> is conncected here:</h2>
          <FormatCode
            code={code_4}
          />

          <SubHeading
            text={"d2 bit:"}
            size={20}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />



          <h2>d2 is for D register load.</h2>
          <div className={styles.img_container}>
            <img src={dregister} />
          </div>

          <h2>We will load in D Register if the type of instruction is C and d2 bit is set, using And gate we can make the logic:</h2>
          <h2>HDL Code:</h2>

          <FormatCode
            code={code_5}
          />

          <h2>4th indexing bit is d2</h2>


          <SubHeading
            text={"d3 bit:"}
            size={20}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />

          <h2>d3 is to load to Memory</h2>
          <h2>In the CPU contract the bit that would be set to 1 is writeM when we write to memory</h2>
          <h2>HDL Code:</h2>



          <FormatCode
            code={code_6}
          />


          <h2>Using And gate we are taking d3 bit as input and 1st bit of instruction, so we only write to memory when the instruction type is Type C, we dont wanna do it for type A instruction as those bits are meaning less for Type A instructions.
          </h2>


          <SubHeading
            text={"Jump Bits"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
          <br />

          <SubHeading
            text={"j1 j2 j3"}
            size={15}
            start_color={"#9EFF9E"}
            end_color={"#006400"}
          />


          <h2>jump bits controls the PC, they specify weather we are going to load Memory from A register or not.</h2>


          <h2>There are many different ways to implement to control of PC through jump bits, we are gonna do it using Mux 8:1, as we have 3 control bits and 8 possible outcomes.
            here is the HDL code for Mux8 as its not a builtin Chip.</h2>


          <FormatCode
            code={code_7}
          />
          <ul><li><h2>0th and 7th input will have 0 and 1 values because</h2></li>


          <FormatCode
            code={code_8}
          />

          <h2>we are gonna use output control bits from ALU(zr,ng) to check for conditions</h2>
          <FormatCode
            code={code_9}
          />
          <h2><li>1st input to Mux8</li></h2>
            <FormatCode
              code={code_10}
            />
            <h2>out <SubHeading
              text={">"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> 0 requires.</h2>

            <h2><br /><br />
              1. zr = 0<br />
              <SubHeading
                text={"AND"}
                size={15}
                start_color={"#9EFF9E"}
                end_color={"#006400"}
              />
              <br /><br />
              2. ng = 0<br />
            </h2>

            <h2>To implement this logic we can use Not and And gates.</h2>

            <FormatCode
              code={code_11}
            />

            <h2>out JGT will be input to 1st input of Mux8.</h2>

            <h2><li> 2nd input to Mux8</li></h2>
            <FormatCode
              code={code_12}
            />

            <h2>out = 0 requires:</h2>
            <h2>1. zr = 1</h2>
            <h2>For that we can directly connect zr to 2nd input of Mux8</h2>

            <h2><li>3rd input to Mux8</li></h2>
            <FormatCode
              code={code_13}
            />

            <h2>out  <SubHeading
              text={">="}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> 0 requires:</h2>

            <h2>1. ng = 0</h2>

            <h2>We can connect <SubHeading
                text={"notNgOut"}
                size={15}
                start_color={"#9EFF9E"}
                end_color={"#006400"}
              /> to 3rd input of Mux8 as its opposite of ng.</h2>


            <h2><li>4th input to Mux8</li></h2>


            <FormatCode
              code={code_14}
            />
            <h2>out <SubHeading
              text={"<"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> 0 requires:</h2>
            <h2>1. ng = 1</h2>
            <h2>We can connect ng directly to 4th input of Mux8.</h2>

            <h2><li>5th input to Mux8</li></h2>


            <FormatCode
              code={code_15}
            />

            <h2>out != 0 requires:</h2>

            <h2>1. zr = 0</h2>
            <h2>We can connect the negated zr <SubHeading
              text={"notZrOut"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> to 5th input of Mux8</h2>
            <h2><li>6th input to Mux8</li></h2>

            <FormatCode
              code={code_16}
            />

            <h2>out <SubHeading
              text={"<="}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> 0 requires:</h2>


            <h2>1. ng = 1<br />
              <SubHeading
                text={"OR"}
                size={15}
                start_color={"#9EFF9E"}
                end_color={"#006400"}
              /> <br /><br />
              2. zr = 1</h2>

            <h2>
              Using OR gates we can make this logic and connect its output to 6th input of Mux8.
            </h2>

            <h2>HDL Code for jump logic:</h2>


            <FormatCode
              code={code_17}
            />


          </ul>


          <SubHeading
            text={"PC"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />

          <h2>PC have 3 control bits:</h2>

          <ol>
            <li><h2>RESET</h2></li>
            <li><h2>INC</h2></li>
            <li><h2>LOAD</h2></li>
          </ol>


          <h2>
            reset is input which is connected and doesn't need internal logic.
            inc bit can always be true because if <SubHeading
              text={"load == 1 and inc == 1"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            />
          </h2>
          <h2>
            The PC chip load.
            But we do need logic when to load address.
            condition to load:
          </h2>
          <ol>
            <li><h2>Its type C instruction</h2></li>
            <li><h2> Output of Mux8 is 1</h2></li>
          </ol>


          <h2>For that we can use a And Gate</h2>
          <h2>HDL code:</h2>


          <FormatCode
            code={code_18}
          />

          <h2>
            <SubHeading
              text={"pcLoad"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> is output from Mux8 ,
            <SubHeading
              text={"pcLoad"}
              size={15}
              start_color={"#9EFF9E"}
              end_color={"#006400"}
            /> is set to Load of PC chip.
          </h2>

          <h2>This covers all the logic for out CPU.</h2>


          <h2>Entire CPU HDL Code:</h2>
          <FormatCode
            code={code_19}

          />









        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `@300     //LOAD 300 into A Register and select the M[300]
M = D-1  // Set M[300] to D-1`;

const code_2 = `Not(in=instruction[12],out=MorA);
Mux16(a=inM,b=ARegOut,sel=MorA,out=forAlu);`;
const code_3 = `Not(in=instruction[15],out=typeA);
Or(a=typeA,b=instruction[5],out=AregControl);`;
const code_4 = `ARegister(in=forAreg,load=AregControl,out=ARegOut,out[0..14]=addressM);`;
const code_5 = `And(a=instruction[4],b=instruction[15],out=writeD);
DRegister(in=toD,load=writeD,out=DRegOut);`;
const code_6 = `And(a=instruction[3],b=instruction[15],out=writeM);          `;
const code_7 = `CHIP Mux8 {
  IN a, b, c, d,
     e, f, g, h,
     sel[3];
  OUT out;

  PARTS:
  Mux(a=a,b=b,sel=sel[0],out=one);
  Mux(a=c,b=d,sel=sel[0],out=two);
  Mux(a=e,b=f,sel=sel[0],out=three);
  Mux(a=g,b=h,sel=sel[0],out=four);
  Mux(a=one,b=two,sel=sel[1],out=f1);
  Mux(a=three,b=four,sel=sel[1],out=f2);                   
  Mux(a=f1,b=f2,sel=sel[2],out=out);
  }`;
const code_8 = `j1 j2 j3
0  0  0   => No Jump
1  1  1   => Unconditional Jump`;
const code_9 = `zr | zr == 1 => output is zero
ng | ng == 1 => output is negative`;
const code_10 = `j1 j2 j3
0  0  1 => out > 0`;
const code_11 = `Not(in=zrOut,out=notZrOut);
Not(in=ngOut,out=notNgOut);
And(a=notZrOut,b=notNgOut,out=JGT);`;
const code_12 = `j1 j2 j3
0  1  0 => out = 0`;
const code_13 = `j1 j2 j3
0  1  1 => out >= 0`;
const code_14 = `j1 j2 j3
1  0  0 => out < 0`;
const code_15 = `j1 j2 j3
1  0  1 => out != 0`;
const code_16 = `j1 j2 j3
1  1  0 => out <= 0`;
const code_17 = `ALU(x=DRegOut,y=forAlu,zx=instruction[11],nx=instruction[10],zy=instruction[9],ny=instruction[8], f=instruction[7],no=instruction[6],out=outM,out=toD,out=fx,zr=zrOut,ng=ngOut);

Not(in=zrOut,out=notZrOut);
Not(in=ngOut,out=notNgOut);
And(a=notZrOut,b=notNgOut,out=JGT);

Or(a=zrOut,b=ngOut,out=JLE);
Mux8(a=false, b=JGT, c=zrOut, d=notNgOut, e=ngOut, f=notZrOut, g=JLE, h=true, sel=instruction[0..2], out=muxLoad);`;
const code_18 = `And(a=instruction[15],b=muxLoad,out=pcLoad);
PC(in=ARegOut,load=pcLoad,inc=true,reset=reset,out[0..14]=pc);`;

const code_19 = `
CHIP CPU {

    IN  inM[16],         // M value input  (M = contents of RAM[A])
        instruction[16], // Instruction for execution
        reset;           // Signals whether to re-start the current
                         // program (reset==1) or continue executing
                         // the current program (reset==0).

    OUT outM[16],        // M value output
        writeM,          // Write to M? 
        addressM[15],    // Address in data memory (of M)
        pc[15];          // address of next instruction

    PARTS:
    Not(in=instruction[15],out=typeA);              // Check for Type A instruction
    Or(a=typeA,b=instruction[5],out=AregControl);   // Check if Destination is D Register

    And(a=instruction[3],b=instruction[15],out=writeM);      // Write To Memory if d3(M) is set and Its Type C instruction      
    And(a=instruction[5],b=instruction[15],out=firstMux);    // Write To A Register if Type C instruction and d1(A) bit is set      
    And(a=instruction[4],b=instruction[15],out=writeD);      // Write To D REgister if Type C instruction and d2(D) but is set

    Mux16(a=instruction,b=fx,sel=firstMux,out=forAreg);

    ARegister(in=forAreg,load=AregControl,out=ARegOut,out[0..14]=addressM);

    Not(in=instruction[12],out=MorA);
    
    Mux16(a=inM,b=ARegOut,sel=MorA,out=forAlu);

    DRegister(in=toD,load=writeD,out=DRegOut);   
    ALU(x=DRegOut,y=forAlu,zx=instruction[11],nx=instruction[10],zy=instruction[9],ny=instruction[8],
        f=instruction[7],no=instruction[6],out=outM,out=toD,out=fx,zr=zrOut,ng=ngOut);

    Not(in=zrOut,out=notZrOut);
    Not(in=ngOut,out=notNgOut);
    And(a=notZrOut,b=notNgOut,out=JGT);

    Or(a=zrOut,b=ngOut,out=JLE);
    Mux8(a=false, b=JGT, c=zrOut, d=notNgOut, e=ngOut, f=notZrOut, g=JLE, h=true, sel=instruction[0..2], out=muxLoad);
    And(a=instruction[15],b=muxLoad,out=pcLoad);
    
    PC(in=ARegOut,load=pcLoad,inc=true,reset=reset,out[0..14]=pc);
}
`;