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


        </ol></h2>
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