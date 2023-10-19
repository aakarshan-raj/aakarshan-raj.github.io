import styles from "../../../../styles/styles.module.css"


export const ShowSevenRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Threads in Rust</h1>
          <hr></hr>
          <div className={styles.content}>
            <h2>A rust program starts with a single thread(main), using standard
              implementation provided to use we can create multiple threads in our
              rust program, more threads means we can perform tasks faster for example
              a http server, using multiple threads can increase the perfromamce of the
              server, but we need to use it carefully as we only have limited number of
              threads and with rust we need to be extra careful(only while writing rust,
              when it runs we can relax).</h2>
            <h2>
              Let's look at the defination of a thread in rust doc
              "An executing Rust program consists of a collection of native OS
              threads, each with their own stack and local state. Threads can be named,
              and provide some built-in support for low-level synchronization."

            </h2>
            <h2>
              threads can be either native or green, native threads have
              less overhead and are handled by OS, but are resource intensive
              while green threads are managed at applocation level, and require
              a lot of bookeeping, from rust 1.0 we only gave native thread.
            </h2>
            <h2>
              we will talk about synchronization support for threads later on!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
