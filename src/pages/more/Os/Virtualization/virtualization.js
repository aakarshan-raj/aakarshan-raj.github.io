import styles from '../../../../styles/styles.module.css';
import { useEffect } from 'react';
import SubHeading from '../../../../main_components/sub_heading'
import FormatCode from '../../../../main_components/code_formatter';

export const ShowVirtualization = (props) => {
  const title = "Virtualization";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <div className={styles.book_content}>
        <SubHeading
          text={"The Process"}
          size={""}
          start_color={"#ff0f3f"}
          end_color={"#51ed4c"}
        />
        <h2> <ol>
          <li>Utilize CPU by switching tasks if the process is doing I/O.</li>
          <li>  Don't wait for I/O to finish; we could be running other instructions while the user gives input.</li>
          <li>  If we have a lot of processes, don't wait for a process to end to give control to a process that needs to request I/O. We can use the
            time when it goes into a blocking state due to user input as an opportunity to run our process. If we give it control at the end, it will take a lot of time.</li>
          <li>   Switch processes without waiting for the process to fully end when I/O instructions constitute more than ~50% of its workload.</li>
        </ol></h2>
        <hr />
        <SubHeading
          text={"The Process API"}
          size={""}
          start_color={"#ff0f3f"}
          end_color={"#51ed4c"}
        />
        <h2> <ol>
          <li>fork starts another proceess and executes the code after fork call in original program in that process.</li>
          <li>fork() returns 0 if it succdeed and a negative number if it failed.</li>
          <li>The output becomes non-determinstic since the process execution is handled by CPU schduler.</li>
          <li>wait() system call makes parent process to wait for child process to complete its execution.</li>
          <li>wait(NULL) on linux would return pid of child process.</li>
          <li>exec() family of system callls replace the runnning process image with a new process image, overwritting code segment, re-initialising heap and stack memory.</li>
          <li>execvp a system call of exec family takes argument of program name and arguments with null terminating.</li>
          <FormatCode
            code={code_1}
            lang="c"
          />
          <li>example: unix shell</li>
          <ol>
            <li>Write a argument in shell</li>
            <li>shell calls fork</li>
            <li>inside child prcess exec is called with argument </li>
            <li>in parent process we call wait() so we wait for child process to complete</li>
            <li>repeat</li>
          </ol>
          <li>A/C Unix security model only parent process can terminate child process. the first process is known as init</li>
          <li>An orphan process is adopted by init process(pid:1)</li>

          <li>Illusion of Copying: When a child process is created with `fork()`, it initially shares the same memory pages (including variables) with the parent process, creating the illusion of variable copying.
          </li>
          <li>Shared Memory Pages: Both parent and child processes use the same memory pages until either process attempts to modify a shared page.</li>
          <li>Copy-on-Write (COW): When a modification is attempted, the operating system creates a private copy of the memory page containing the modified data.
          </li>

        </ol>
        </h2>
        <SubHeading
          text={"Limited Direct Execution"}
          size={""}
          start_color={"#ff0f3f"}
          end_color={"#51ed4c"}
        />
        <h2>
          <ol>
            <li> CPU is shared with others jobs through time-sharing</li>
            <li>Two main challenges:</li>
            <ol>
              <li>Performace overhead from sharing cpu </li>
              <li>Retaining control over CPU while running different processes</li>
            </ol>
            <li>Direct execution involves:</li>
            <h2>OS</h2>
            <ol>
              <li>Create entry for process list</li>
              <li>Allocate memory for program</li>
              <li>Load program into memory</li>
              <li> Set up stack with argc/argv</li>
              <li>Clear registers</li>
              <h2>Program</h2>
              <li>Run main()</li>
              <li> Execute return from main </li>
              <h2>OS</h2>
              <li> Free memory of process</li>
              <li>Remove from process list</li>
            </ol>
            <li>Two issues with this</li>
            <ol>
              <li>How to make sure the running program doesn't do something we dont want</li>
              <ol>
                <li>The kernel initialize trap table during boot up, which involves configuring hardware to handle interrupts and system calls. A system-call number is usually assigned to each system call.</li>
                <li> user process is created ,the kernel sets up a kernel stack for the process, where it saves registers and other context information during system calls and interrupts.</li>
                <li> User process needs privilege access -&gt; Calls system -&gt; Triggers trap -&gt; Kernel identifies request -&gt; Executes handler.</li>
                <li> kernal identifies the system call by going into a predefined location known as trap handler and matches system call number provided by user to system calls in trap table.</li>
                <li>After execution we restore user process registers and execute a Return from trap which takes us back in user privilege mode</li>
              </ol>
              <li>How do we switch a running process with other</li>
              <ol>
                <li>OS can give control and run a program on CPU easily, what it has to worry about is getting that control back. To make sure OS always get the control back their is a mechanism known as timer interrupt, it raises interrupt every some milliseconds, and stops the current running process and executes a handler that gives back control to OS.</li>
                <li>At boot time the OS sets which code to run when a timer interrupt occurs</li>
                <li> And at boot sequence OS starts the timer too.</li>
                <li>OS also regains control if a Process is trying to do something illegal like trying to execute a piece of code that its not authorised too. since the process has to make a systemcall for that access and thats when OS regains control if that sys call is invalid</li>
                <li>After OS regains control by a timer interrupt , scheduler decides to run a different process or the same process that was running before.</li>
                <li>If it decides to run different process OS run context switch code which saves state of previous running process into kernal stack(same as simple stack but to be only used by kernal )</li>
                <li>It also changes the value on stack so when Return from trap is executed we start to run different program and not the same one.</li>
              </ol>
            </ol>

            <li> During one interrupt execution, OS disables raising of any other interrupts.</li>

          </ol>
        </h2>
        <hr />


      </div>

    </>
  );
}

const code_1 = `       else if(rc == 0){
          printf("Child process ID:%d",(int)getpid());
          char *args[2];
          args[0] = "ls";
          args[1] = NULL;
          execvp(args[0],args);
       }`