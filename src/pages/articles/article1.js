import { useEffect } from "react";
import styles from "../../styles/styles.module.css"

// import img1 from "./img/1.png"


export const Article1 = (props) => {
    const title = "Lessons learnt from Learn concurrent programming with go";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>
            <h2>
                <ol>
                    <li>Amdahl’s law states that the overall performance improvement gained by
                        optimizing a single part of a system is limited by the fraction of time that the
                        improved part is actually used</li>
                    <li>Gustafson’s law tells us that as long as we find ways to keep our extra
                        resources busy, the speedup should continue to increase and not be limited by
                        the serial part of the problem.</li>
                    <li>Execution cycle of a command</li>
                    <ol>
                        <li>Job goes in a job queue</li>
                        <li>Once ready moved to ready queue</li>
                        <li>CPU starts executing instructions of job</li>
                        <li>If a I/O is made job is put in waiting queue</li>
                        <li>another job is picked</li>
                        <li>once I/O is done job is again moved to ready queue</li>
                        <li>CPU picks the job and executes the instructions</li>
                        <li> If a interrupt is raise CPU picks another job</li>
                        <li>original job is again put in ready queue and will be picked by CPU</li>
                    </ol>
                    <li>information about a job is stored in PCB(process context block)</li>
                    <li> goroutines are user level threads, which are mapped to OS threads, M go routines are multiplexed to N OS threads, Go scheduler can move these goroutine from one thread to another and this all happens in one processs</li>

                    <li>atomic operation: instructions that cannot be interuppted</li>
                    <li>A race condition occurs when two or more threads (go routines) try to access the same critical section concurrently, and at least one of them is trying to modify shared data.</li>
                    <li>mutex locks other threads from executing code that is locked by another thread, only after the first thread is done the suspending mutex can access the code</li>
                    <li>condition variables come in. Condition variables work togetherwith mutexes and give us the ability to block the current execution until we have a signal that a particular condition has changed.</li>
                    <li> using cond we can make one go routine wait for a condition to be true and start its execution</li>
                    <li> Calling Wait() Unlocks the mutex and suspends a go routine and using Signal() from another goroutine starts it again, This is called monitor pattern using mutex and conditional variables, it can be used to order the execution of the program. Ex: 5.7 (Calling signal between Mutex Lock and Unlock in a go routine will only be executed if Wait releases the lock)</li>
                    <li>To execute wait and signal we need to call Lock() before.</li>
                    <li> Broadcast unlike signal which only resumes one of the suspended go routine, broadcast resumes all suspended go routines, after suspended go routine resume it starts its execution after the line where Wait() was called.</li>

                </ol>
            </h2>

        </>
    );
}