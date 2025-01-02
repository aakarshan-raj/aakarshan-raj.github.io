import { useEffect } from "react";
import styles from "../../styles/styles.module.css"



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
              
            </h2>

        </>
    );
}