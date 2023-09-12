import styles from "../../../../../styles/styles.module.css"


export const ShowTwoAssembly = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>x86_64 Instruction Set</h1>

          <hr></hr>
          <h2>Syntax: Intel</h2>
          <h2>format: INSTRUCTION DESTINATION, SOURCE</h2>
          <h2>the data is stored in little endian. meaning least significant byte is stored at the lowest memory address, and the most significant byte is stored at the highest memory address.</h2>
          <h2>0x12345678abcdef00 would be stored as:</h2>
          <div className={styles.code_background}>
            <h2>{code_1}</h2>
          </div>
          <hr></hr>
          <h2>Instructions:</h2>
          <hr />
          <h2 className={styles.instruction}>NOP - no operation</h2>
          <h2>Mnemonic for XCHG RAX,RAX - exchange RAX register</h2>
          <h2>Used for padding and alignment or during debugging when we put a breakpoint.</h2>
          <hr />

          <h2 className={styles.instruction}>PUSH rax</h2>
          <h2>push operand on stack and decrease the stack, operand can be a immediate value, register content, or memory content</h2>
          <hr />


          <h2 className={styles.instruction}>POP rax</h2>
          <h2>pops value from stack to rax register, operand can be memory location, register</h2>
          <hr />



          <h2 className={styles.instruction}>CALL sub</h2>
          <h2>saves the address of the next instruction (the return address) onto the stack,
            decreases the value of the stack pointer (`RSP`) to make room for the return address,
            and changes the instruction pointer (`RIP`) to point to the address where the
            subroutine begins, effectively transferring control to the subroutine.
          </h2>
          <hr />


          <h2 className={styles.instruction}>RET</h2>
          <h2>will pop the stack(popping the returned address that was put by call) and load it into RIP.</h2>
          <hr />


          <h2 className={styles.instruction}>MOV</h2>
          <h2>mov destination_register, source_register</h2>
          <div className={styles.code_background}>
            <h2>{code_2}</h2>
          </div>
          <h2>what mov cannot do is: mov [rax],[rbx]</h2>
          <hr />




          <h2 className={styles.instruction}>ADD</h2>
          <h2>add destination source: adds source to destination and stores in destination</h2>
          <div className={styles.code_background}>
            <h2>{code_3}</h2>
          </div>
          <h2></h2>
          <hr />



          <h2 className={styles.instruction}>SUB</h2>
          <h2>sub destination, source: substracts source from destination and result is stored in destination</h2>
          <div className={styles.code_background}>
            <h2>{code_4}</h2>
          </div>
          <h2></h2>
          <hr />



          <h2 className={styles.instruction}>IMUL</h2>
          <h2>(prefered by msvc over mul)</h2>
          <h2>signed integer multiplication</h2>
          <h2>imul destination, source</h2>
          <div className={styles.code_background}>
            <h2>{code_5}</h2>
          </div>
          <h2>In both above examples truncation problems can arise.</h2>
          <h2>The multiplication is signed so if the MSB of the operand is 1, it will 2's compliment it, do the operation, and again 2's compliment it.</h2>
          <hr />


          <h2 className={styles.instruction}>MUL</h2>
          <h2>used for unsigned multiplication</h2>
          <div className={styles.code_background}>
            <h2>{code_6}</h2>
          </div>
          <hr />


          <h2 className={styles.instruction}>MOVZX - 1-4 byte operand(source)</h2>
          <h2>move with zero extend</h2>
          <h2>movzx destination, source</h2>
          <h2>move source value into destination, zero extending source value to larger size in destination, used when casting smaller values to larger</h2>
          <div className={styles.code_background}>
            <h2>{code_7}</h2>
          </div>
          <hr />


          <h2 className={styles.instruction}>MOXSX - 1-2 byte operand(source)</h2>
          <h2>move with signed extend</h2>
          <h2>movsx destination, source </h2>
          <h2>Move the operand into destination, the source needs to be signed extended into destination meaning its original sign bit should reflect in the destination.</h2>
          <div className={styles.code_background}>
            <h2>{code_8}</h2>
          </div>
          <hr />


          <h2 className={styles.instruction}>MOVSXD - 4-8 byte operand(source)</h2>
          <h2>used for 32 to 64 bit operands for move with signed extended</h2>
          <div className={styles.code_background}>
            <h2>{code_9}</h2>
          </div>
          <hr />

        </div>
      </div>
    </div >
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

const code_2 = `
mov rbx,rcx

move one byte into rax
mov rbx,b45h 

move content of rdi into memory location pointed by address in rax
mov [rdx], rdi 

move 4f as a byte into memory location pointed by address in rax
mov [rax],b4fh`;

const code_3 = `add rdx, rbx   // rax = rax + rbx

add rdx, 42    // rax = rax+42

add rdx, [rcx] // rax = rax +[rcx]

add [rdx], rsi // [rdx] = [rdx]-rsi`;

const code_4 = `sub rax, rbx   // rax = rax-rbx

sub rdi, 42    // rdi = rdi-42

sub rax, [rcx] // rax = rax-[rcx]

sub [rdx], rsi // [rdx] = [rdx]-rsi`;

const code_5 = `imul r/m8 // AX = AL * r/m8

imul AL

imul r/m64    // RDX:RAX = RAX * r/m64 , store MSBs in RDX and LSBs in RAX

imul rax, rbx // rax = rax * rbx

imul rdi,48h  // rdi = rdi * 48h`;

const code_6 = `mul rdi // RDX:RAX = RAX * RDI`;

const code_7 = `move value in dl into EAX and extend all other bits in EAX by 0
movzx eax, dl 

move value in edx into rax and extend all other bits in RAX by 0
movzx rax,edx`;

const code_8 = `moving value in CX(16 bit) into RAX(64 bit), if the value in CX is negative, all the MSB bits in RAX will be F to reflect the value is negative
movsx rax, cx`;

const code_9 = `movsxd rax, edx`;