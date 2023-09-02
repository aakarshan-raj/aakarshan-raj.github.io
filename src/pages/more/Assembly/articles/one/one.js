import styles from "./styles.module.css"
import stack_one from './imgs/stack_one.png'

export const ShowOneAssembly = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>why do we sub the stack at start of each function?</h1>

          <hr></hr>
          <h1>Some examples</h1>
          <hr />

          <div className={styles.code_background_pink}>
            <h2>
              {code_1}
            </h2>
          </div>

          <div className={styles.code_background_pink}>
            <h2>
              {disass_1}
            </h2>
          </div>
          <hr />
          <div className={styles.code_background_pink}>
            <h2>
              {code_2}
            </h2>
          </div>

          <div className={styles.code_background_pink}>
            <h2>
              {disass_2}
            </h2>
          </div>
          <hr />

          <div className={styles.code_background_pink}>
            <h2>
              {code_3}
            </h2>
          </div>


          <div className={styles.code_background_pink}>
            <h2>
              {disass_3}
            </h2>
          </div>
          <hr />

          <h2>As we can see we decrease the rsp everytime at the start of function , that increases the stack. but why?</h2>
          <h2>Lets understand throught this program</h2>
          <div className={styles.code_background_pink}>
            <h2>
              {code_4}
            </h2>
          </div>

          <div className={styles.code_background_pink}>
            <h2>
              {disass_4}
            </h2>
          </div>

          <h2>now lets looks at the stack diagram of this program:</h2>
          <div className={styles.img_container}>
            <img src={stack_one}></img>
          </div>
          <h2>Things to note: each memory address point to one byte. the address line is 8 byte long, so the range will be from :</h2>
          <div className={styles.code_background_pink}>
            <h2>
              {range}
            </h2>
          </div>

          <h2>in the stack diagram drawn above i have ommited the preceding zeros.</h2>
          <h2>Each hex values points to one byte, meaning
            if we have a stack like this:</h2>
          <div className={styles.code_background_pink}>
            <h2>
              {more_range}
            </h2>
          </div>
<h2>we can notice that the stack is be increased everytime there is a function call.</h2>
<h2>According to microsoft:"The stack will always be maintained 16-byte aligned, except within the prolog"</h2>
       
<h2>whenver a function is called 8 byte of data is being pushed onto the stack, that's why in every function whenever we sub the rsp, there is always +8h, to make the stack 16 byte aligned.</h2>
<h2>RET address+8byte = 16 byte</h2>

<h2>in this example we can see the disassembly of func3() it subs the stack by 18h,
8 of it for 16 byte alligment and in the function we have a variable, so 10h for that, why 10h? cause that's the least it can sub because 10h is 16 in decimal, that can point to 16 byte worth of data, which is maintained by the stack.
<h2>if in any case the localvariable takes more than 16 byte, say 20 byte the stack will be subbed 28h instead, 8 for stack allignment, leaving 20h, 20h can point 32 byte, for 5 int's worth of 20 byte that , that will leave 12 byte, meaning if we can allocate 8 int(32 byte) and if we allocate more than that, the rsp will be subbed more in multiple of 10h(16 in decimal) as the stack needs be to 16 byte alligned so it will be subbed by 38h, giving 16 byte more.</h2>
<h2>also in cases where we are just calling another function, the call to function will put 8 byte worth of data on to the stack too, and we will still allocate some extra for local variable like in case of func()</h2>
</h2>
          <hr/>




          <div className={styles.code_background_pink}>
            <h2>

            </h2>
          </div>

          <div className={styles.code_background_pink}>
            <h2>

            </h2>
          </div>

          <div className={styles.code_background_pink}>
            <h2>

            </h2>
          </div>

        </div>
      </div>
    </div>
  );
}

const code_1 = `int call_me() {
	return 0x1111;
}

int main() {
	call_me();
	return 0x9999;

}`;
const disass_1 = `
main:
0000000140001010  sub         rsp,28h  
0000000140001014  call        call_me (0140001000h)  
0000000140001019  mov         eax,9999h  

call_me:
0000000140001000  mov         eax,1111h  
0000000140001005  ret `;

const code_2 = `int func() {
	int i = 0x5ca1ab1eeee;
	return i;
}
int main(){
	int i = 0x5ca1ab1eeee;

	return func();
}`;
const disass_2 = `int main:
0000000140001020  sub         rsp,38h  
0000000140001024  mov         dword ptr [i],1AB1EEEEh  
000000014000102C  call        func (0140001000h)  
0000000140001031  add         rsp,38h  
0000000140001035  ret 

func:
0000000140001000  sub         rsp,18h  
0000000140001004  mov         dword ptr [rsp],1AB1EEEEh  
000000014000100B  mov         eax,dword ptr [rsp]  `;

const code_3 = `short main() {
  short a;
  int b[6];
  long long c;
  a = 0xbabe;
  c = 0xba1b0ab1edb100d;
  b[1] = a;
  b[4] = b[1] + c;
  return b[4];
}`;
const disass_3 = `main:
0000000140001000  sub         rsp,38h  
0000000140001004  mov         eax,0FFFFBABEh  
0000000140001009  mov         word ptr [rsp],ax  
000000014000100D  mov         rax,0BA1B0AB1EDB100Dh  
0000000140001017  mov         qword ptr [c],rax  
000000014000101C  mov         eax,4  
0000000140001021  imul        rax,rax,1  
0000000140001025  movsx       ecx,word ptr [rsp]  
0000000140001029  mov         dword ptr b[rax],ecx  
000000014000102D  mov         eax,4  
0000000140001032  imul        rax,rax,1  
0000000140001036  movsxd      rax,dword ptr b[rax]  
000000014000103B  add         rax,qword ptr [c]  
0000000140001040  mov         ecx,4  
0000000140001045  imul        rcx,rcx,4  
0000000140001049  mov         dword ptr b[rcx],eax  
000000014000104D  mov         eax,4  
0000000140001052  imul        rax,rax,4  
0000000140001056  movzx       eax,word ptr b[rax]  
000000014000105B  add         rsp,38h  
000000014000105F  ret`;

const code_4 = `int func3() {
	int i = 0x7a11;
	return i;
}
int func2() {
	int j = 0x7a1e;
	return func3();
}
int func() {
	return func2();
}
int main() {
	return func();
}`;
const disass_4 = `main
0000000140001060  sub         rsp,28h  
0000000140001064  call        func (0140001040h)  
0000000140001069  add         rsp,28h  
000000014000106D  ret 

func
0000000140001040  sub         rsp,28h  
0000000140001044  call        func2 (0140001020h)  
0000000140001049  add         rsp,28h  
000000014000104D  ret 

func2
0000000140001020  sub         rsp,38h  
0000000140001024  mov         dword ptr [j],7A1Eh  
000000014000102C  call        func3 (0140001000h)  
0000000140001031  add         rsp,38h  
0000000140001035  ret  


func3
0000000140001000  sub         rsp,18h  
0000000140001004  mov         dword ptr [rsp],7A11h  
000000014000100B  mov         eax,dword ptr [rsp]  
000000014000100E  add         rsp,18h  
0000000140001012  ret  `;

const code_5 = ``;
const disass_5 = ``;

const code_ = ``;
const disass_ = ``;

const range = `0x0000000000000000
0xFFFFFFFFFFFFFFFF`;

const more_range = `0x______00 : AA CC EE 33 55 22 66 22 66 44 55 22 66 33 66 56
the values pointed will be as following:
0x00:AA
0x01:CC
0x02:EE
0x03:33
0x04:55
0x05:22
0x06:66
0x07:22
0x08:66
0x09:44
0x0A:55
0x0B:22
0x0C:66
0x0D:33
0x0E:66
0x0F:56`;