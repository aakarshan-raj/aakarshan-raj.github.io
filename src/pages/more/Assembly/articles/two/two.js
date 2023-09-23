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


          <h2 className={styles.instruction}>LEA </h2>
          <h2>Load effective memory</h2>
          <h2>[] here doesn't mean that we will load memory of the value passed.</h2>
          <h2>used for pointer arithmetic such as calulating addres of element of a array.</h2>
          <div className={styles.code_background}>
            <h2>{code_10}</h2>
          </div>
          <hr />


          <h2 className={styles.instruction}>JMP </h2>
          <h2>unconditional jump, changes RIP (goto, functions, interrupts)</h2>
          <div className={styles.code_background}>
            <h2>{code_11}</h2>
          </div>
          <hr />

          <h2 className={styles.instruction}>CMP </h2>
          <h2>cmp operand1, operand2</h2>
          <h2>substract operand2 from operand1 and sets the appropriate flags.</h2>
          <h2>different flags:</h2>
          <h2>1. ZF: zero Flag, set when the result of operation is zero (7th bit in RFLAGS)</h2>
          <h2>2. SF: sign flag, set when MSB of result is set to 1 (8th bit in RFLAGS)</h2>
          <h2>3. OF: overflow flag, set if the result overflows</h2>
          <h2>4. CF: carry flag, set if the operation used carry bit</h2>

          <div className={styles.code_background}>
            <h2>{code_15}</h2>
          </div>
          <hr />

          <h2 className={styles.instruction}>Conditioanl Jump instructions </h2>
          <h2>Mnemonic Translations:</h2>
          <div className={styles.code_background}>
            <h2>{code_12}</h2>
          </div>
          <h2>instructions:</h2>
          <div className={styles.code_background}>
            <h2>{code_13}</h2>
          </div>
          <h2>if the flags are set that is checked for the jump, the RIP will change</h2>
          <h2>For unsigned variables JA and JB is used, the operands in cmp before signed jump checks are in two's compliment, so if MSB is 1, its negative value.</h2>
          <h2>Another way to calculate the jump when reading disassembly is put the jump instruction between the call operand (ONLY for intel syntax).</h2>
          <h2>example:</h2>
          <div className={styles.code_background}>
            <h2>{code_14}</h2>
          </div>
          <h2>we can see it as: cmp 0x13 {equal_less} 0x12</h2>
          <h2>which is true so jump to 0x000014 will occur</h2>
          <hr />


          <h2 className={styles.instruction}>AND - BITWISE AND </h2>
          <h2>and destination, source</h2>
          <h2>the form can be r/mX or register</h2>
          <h2>and operation can set SF and ZF</h2>
          <div className={styles.code_background}>
            <h2>{code_16}</h2>
          </div>
          <hr />



          <h2 className={styles.instruction}>OR - BITWISE OR</h2>
          <h2>or destination, source</h2>
          <h2>the form can be r/mX or register</h2>
          <h2>or operation can set SF and ZF</h2>
          <div className={styles.code_background}>
            <h2>{code_17}</h2>
          </div>
          <hr />



          <h2 className={styles.instruction}>XOR - BITWISE XOR </h2>
          <h2>xor destination, source</h2>
          <h2>the form can be r/mX or register</h2>
          <h2>xor operation can set SF and ZF</h2>
          <h2>used to zero out register cause of its nature (1^1 = 0, 0^0 = 0)</h2>
          <div className={styles.code_background}>
            <h2>{code_18}</h2>
          </div>
          <hr />


          <h2 className={styles.instruction}>NOT - BITWISE NOT(one's compliment)</h2>
          <h2>not operand</h2>
          <h2>the operand is in r/mX </h2>
          <h2>not operation can set SF and ZF</h2>
          <div className={styles.code_background}>
            <h2>{code_19}</h2>
          </div>
          <hr />

          <h2 className={styles.instruction}>INC</h2>
          <h2>inc operand</h2>
          <h2>the operand is in r/mX </h2>
          <h2>increases the operand by 1.</h2>
          <h2>can set OF SF ZF AF PF CF</h2>
          <div className={styles.code_background}>
            <h2>{code_20}</h2>
          </div>
          <h2>in optimised code , compiler removes INC</h2>
          <hr />


          <h2 className={styles.instruction}>DEC</h2>
          <h2>dec operand</h2>
          <h2>the operand is in r/mX </h2>
          <h2>decreases the operand by 1.</h2>
          <h2>can set OF SF ZF AF PF CF</h2>
          <div className={styles.code_background}>
            <h2>{code_21}</h2>
          </div>
          <h2>in optimised code , compiler removes DEC</h2>
          <hr />

          <h2 className={styles.instruction}>TEST</h2>
          <h2>test operand_1, operand_2</h2>
          <h2>perform and operation on operand_1 and operand_2, change flags , discard the values </h2>
          <div className={styles.code_background}>
            <h2>{code_22}</h2>
          </div>
          <h2>in less optimised code we will see if we are anding two values</h2>
          <div className={styles.code_background}>
            <h2>{code_23}</h2>
          </div>
          <h2>which does basically same thing, after we peform AND operation and store the result in eax, then we test the value to test if the value is zero or not, performing AND operation on a register with itself gives same value. </h2>
          <h2>same pattern can be seen when performing OR operation and checking the result</h2>
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

const code_10 = `rax = rdx+rbx*8+5
lea rax,[rdx+rbx*8+5]
`;

const code_11 = `short relative 
jmp rel8 // RIP = RIP+1 byte
if RIP = 0x000013
then after jmp 0x0C RIP = 0x000015+0x0C =>0x000021

jmp -2 //infinite loop


near relative
jmp rel32 // RIP = RIP+4 byte

far absolute
jmp r/m64 // RIP = r/m63`;

const code_12 =
  `A: Above(greater), unsigned >
B: Below(less), unsigned    <
G: Greater, signed          > 
L: Less, signed             <
E: Equal(also Z )           =
N: Not                      !`;
const code_13 =
  `JZ/JE   location, ZF == 1
JNZ/JNE location, ZF == 0 
JLE/JNG location, ZF == 1 || SF !== OF
JGE/JNL location, SF == OF
JBE/JNA location, CF == 1 || ZF == 1 
JB      location, CF == 1
JS      location, SF == 1
JNS     location, SF == 0   `;
const code_14 = `cmp 0x13, 0x12
jle 0x000014`;

const code_15 = `cmp 0x10,0x10 // will set zf 
cmp dword ptr [rsp+4], eax // sub 4 byte from memory location [rsp+4] by what eax holds.
`;
const equal_less = `<=`;

const code_16 = `and rcx,rax                   // rcx = rcx & rax
and rcx, 0x123ff              // rcx = rcx & 0x123ff
and [memory_address], 0x3434  // [memory_address] = [memory_address] & 0x3434`;

const code_17 = `or rcx,rax                  // rcx = rcx | rax
or rcx, 0x123ff             // rcx = rcx | 0x123ff
or [memory_address], 0x3434 // [memory_address] = [memory_address] | 0x3434`;

const code_18 = `xor rax,rax                   // zero out rax, rax = rax ^ rax
xor rcx,rax                   // rcx = rcx ^ rax
xor rcx, 0x123ff              // rcx = rcx ^ 0x123ff
xor [memory_address], 0x3434  // [memory_address] = [memory_address] ^ 0x3434`;

const code_19 = `not rcx // rcx = ~rcx`;

const code_20 = `inc rax // rax = rax + 1`;
const code_21 = `dec rax // rax = rax - 1`;

const code_22 = `test eax,ecx // perform eax & ecx and set flags`;
const code_23 = `and ecx,eax

mov eax,ecx

test eax,eax`;
