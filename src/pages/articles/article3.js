import { useEffect } from "react";
import styles from "../../styles/styles.module.css"
import FormatCode from "../../main_components/code_formatter";



export const Article3 = (props) => {
    const title = "C++ Concurrency in Action";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>
            <h2>
                <ol>
                    <li>Before C++11, there was no standard C++ library that supported multithreading. Developers had to rely on operating system-specific APIs (such as POSIX Threads) or third-party libraries to implement multithreading.
                    </li>
                    <br></br>
                    <li>Hardware threads is measure of how many independent tasks the hardware can genuinely run concurrently.
                    </li>
                    <br></br>

                    <li>Concurrency can be approached in two main ways: Multiple Processes, Single Thread and One Process, Multiple Threads. In the former, multiple processes are used, each running a single thread that executes tasks independently. In the latter, a single process contains multiple threads, each handling tasks concurrently within the same process.</li>
                    <br></br>

                    <li>C++ implements concurrency primarily through multithreading, utilizing multiple threads within a single process. since it's much easier in terms of less bookkeeping, faster data sharing.

                    </li>
                    <br></br>

                    <li>C++ does not provide a standard library for IPC, similar to Go, both languages rely on OS-level mechanisms or third-party libraries for IPC. some languages, such as Erlang, use a concurrency model built around processes.
                    </li>
                    <br></br>

                    <li>Task parallelism: dividing one tasks into multiple and run them in parallel</li>
                    <br></br>

                    <li>Data parallelism: Multiple threads performing same task on different parts of data</li>
                    <br></br>

                    <li>There is no benefit of using concurrency if the task cannot be parallelized, or if performance gain from using concurrency is not significant emough.</li>

                    <li>C++'s most vexing parse: an ambiguous piece of code that can either be a function declaration or an object constructor call. </li>
                    <br />

                    <li>Use { } when passing a function call operator with class name</li>
                    <FormatCode
                        code={code_1}
                    />
                    <br />

                    <li>std::thread::detach() on a thread makes parent thread not wait for child thread, calling detach() will make the thread takes ownership of its execution and will clean up itself when it's done. Its not recommended and only used in special cases.</li>
                    <br />

                    <li>std::thread::join() on a thread blocks the calling thread until the thread associated with the std::thread object finishes execution. It also ensures that the thread's resources are cleaned up after it has completed, and the std::thread object is no longer associated with the thread, making it no longer joinable.</li>
                    <br />

                    <li> Passing paramter to a function called in a child thread:</li>
                    <FormatCode
                        code={code_2}
                    />
                    <br />

                </ol>
            </h2>

        </>
    );
}

const code_1 = 'std::thread t1{classA()}'

const code_2 = `void do_something(std::string x);

.....
.....

std::string data = "something"
std::thread(do_something,data);`