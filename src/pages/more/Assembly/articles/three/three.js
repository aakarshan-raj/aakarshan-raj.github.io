import styles from "../../../../../styles/styles.module.css"
import instruction_table from "../three/imgs/table.png"

export const ShowThreeAssembly = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Getting started with winDbg and intel manual</h1>
          <hr />




          <h2>what is winDBg</h2>

          <h2>WinDbg, short for Windows Debugger, is a powerful debugging tool provided by Microsoft for debugging and analyzing Windows operating system and application code.</h2>

          <h2>if you are debugging binaries for x64, use winDbg(x64)</h2>
          <h2>opening a binary in GUI interface of winDbg: File -&gt; Open Executable</h2>

          <h2>. means command for debugger. reload means , reload symbols. /f means force the debugger to reload.</h2>



          <div className={styles.code_background_red}>
            <h2>
              {code_1}
            </h2>
          </div>
          <h2>this will display different functions that are called.
            you can check what a function does by:</h2>


          <div className={styles.code_background_red}>
            <h2>
              {code_2}
            </h2>
          </div>

          <h2>other commands:</h2>
          <div className={styles.code_background_red}>
            <h2>
              {code_3}
            </h2>
          </div>


          <h2 className={styles.sub_title}>Hardware vs software breakpoints</h2>


          <h2>software breakpoint: bp function_name</h2>
          <h2>it will insert 0xCC opcode in the code to set this breakpoint.</h2>

          <h2>hardware breakpoint: breakpoints implemented at hardware level, that use dedicated registers, doesn't require to change the code.</h2>

          <h2>different hardware breakpoints:</h2>
          <h2><h2 className={styles.itatic_pink}>1. Write Breakpoints</h2> Break when a specific memory location is written to.</h2>
          <h2><h2 className={styles.itatic_pink}>2. Read Breakpoints</h2> Break when a specific memory location is read from.</h2>

          <h2><h2 className={styles.itatic_pink}>3. Execute Breakpoints</h2> Break when a particular code address is executed.</h2>

          <h2><h2 className={styles.itatic_pink}>4. I/O Breakpoints</h2> Break on input/output (I/O) access to specific addresses or I/O ports.</h2>


          <div className={styles.code_background_red}>
            <h2>
              {code_4}
            </h2>
          </div>

          <h2>ba is break on access, e flag stands for "execute," indicating that you want to set a hardware breakpoint that triggers when code is executed at the specified address.
          </h2>

          <h2>the memory we provided, when its accessed, the program would break.</h2>
          <h2>even if that memory is not currently mapped into the program's memory space. When the memory is eventually mapped in the future and the code at that address is executed, the processor will alert the debugger when the breakpoint is hit</h2>



          <h2>
            when a program is started:

            <ol>
              <li>program starts, virtual memory is allocated, but its not immediately populated with data and code.</li>
              <li>memory mapping: virtual address to physical address</li>
              <li>when the memory is mapped it means the virtual address space is connected to RAM where data and code is.</li>
            </ol>
          </h2>




          <h2>we have virtual address space of the program, but that space is not currently mapped to the RAM, so we can set break on access at a memory location that hasn't even mapped into physical memory , and when it gets mapped, the debugger would be alerted once that memory is used.</h2>


          <h2>useful for malware, as it modifies code during execution.</h2>
          <h2>break on access of memory:</h2>

          <div className={styles.code_background_red}>
            <h2>
              {code_5}
            </h2>
          </div>

          <h2>
            <ul>
              <li>&lt;access type&gt;: This specifies the type of access you want to break on, such as "r" for read access or "w" for write access.(in windows we dont have break on read access so when we specify r flag it means break everytime the memory address is accessed)</li>
              <li>&lt;data size&gt;: This specifies the size of the data you want to monitor, such as 1, 2, 4, or 8 bytes.</li>
              <li>&lt;address&gt;: This is the memory address where you want to set the break on access breakpoint.</li>
            </ul>
          </h2>


          <h2 className={styles.sub_title}>INTEL MANUAL</h2>

          <h2 className={styles.code_background}><h2>There are 4 volume of intel manual, the one important for us is the second volume which contains the full instruction set reference, that can be downloaded from <a href="https://cdrdv2.intel.com/v1/dl/getContent/671110">https://cdrdv2.intel.com/v1/dl/getContent/671110</a></h2></h2>
          <h2>The format:
            each instruction has different forms and its listed in a table with 6 columns</h2>

          <h2><h2 className={styles.itatic_pink}>1. Opcode</h2>Byte that represents the instuction.</h2>
          <h2><h2 className={styles.itatic_pink}>2. Instruction</h2>human readable assembly instruction.</h2>

          <h2><h2 className={styles.itatic_pink}>3. Op/En(operand encoding)s</h2>Form of all the operands. ex: RM,MR,MI.</h2>

          <h2><h2 className={styles.itatic_pink}>4. 64 bit mode</h2>If the instruction is valid for 64 bit. valid(V), Invalid(I)</h2>

          <h2><h2 className={styles.itatic_pink}>4. Compat</h2>Compatible with legacy : V,I, N.E : not encodable.</h2>
          <h2><h2 className={styles.itatic_pink}>4. Description</h2>Longer form of assembly instruction.</h2>

          <h2>example:</h2>

          <div className={styles.img_container}>
            <img src={instruction_table}></img>
          </div>


        </div>
      </div>
    </div >
  );
}


const code_1 = `u $exentry: unassemble and display the assembly code at the entry point of the currently loaded executable or module.

u: unassemble

$exentry: special symbol in WinDbg that represents the entry point of the currently loaded module or executable.`;

const code_2 = `uf address: unassemble a function at the given address

uf:unassemble function
`;

const code_3 = `.restart: restart the dissassmbly process

bp address : set breakpoint at the given address

bl : display all breakpoints

bp function_name : set breakpoint at function_name

p : step command

k : backtrace

t : step into

gu : step out
`;

const code_4 = `ba e 1 <virtual_memory_address>`;
const code_5 = `ba <access type> <data size> <address>`;