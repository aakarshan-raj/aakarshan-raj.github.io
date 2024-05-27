import styles from '../../../../styles/styles.module.css';
import { useEffect } from 'react';
import SubHeading from '../../../../main_components/sub_heading'

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
          <li></li>
          
        </ol></h2>
      </div>

    </>
  );
}

