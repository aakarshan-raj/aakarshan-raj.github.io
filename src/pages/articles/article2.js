import { useEffect } from "react";
import styles from "../../styles/styles.module.css"



export const Article2 = (props) => {
    const title = "Virtual Machine";
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