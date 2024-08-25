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
                </ol>
            </h2>

        </>
    );
}