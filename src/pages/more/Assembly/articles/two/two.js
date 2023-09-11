import styles from "../../../../../styles/styles.module.css"


export const ShowTwoAssembly = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Instruction Set</h1>

          <hr></hr>
    <h2>x86_64 instructions</h2>
    <h2>Syntax: Intel</h2>
    <h2>format: INSTRUCTION DESTINATION, SOURCE</h2>
    <h2>the data is stored in little endian. meaning least significant byte is stored at the lowest memory address, and the most significant byte is stored at the highest memory address.</h2>
        <h2>0x12345678abcdef00 would be stored as:</h2>
        <div className={styles.code_background}>
          <h2>{code_1}</h2>
        </div>
        <hr></hr>
        <h2>Instructions:</h2>
        <hr/>
        <h2 className={styles.instruction}>NOP - no operation</h2>
        <h2>Mnemonic for XCHG RAX,RAX - exchange RAX register</h2>
        <h2>Used for padding and alignment or during debugging when we put a breakpoint.</h2>
        <hr/>
        </div>
      </div>
    </div>
  );
}


const code_1 = `Address    Value   
0x1000      0xff 
0x1001      0xef 
0x1002      0xcd 
0x1003      0xab 
0x1004      0x78
0x1005      0x56 
0x1006      0x34 
0x1007      0x12                `;