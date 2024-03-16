import FormatCode from "../../../../../main_components/code_formatter"
import styles from "../../../../../styles/styles.module.css"
import { useEffect } from "react";


export const ShowThreeGraph = (props) => {
    const title = "Directed acyclic graph(DAG)";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>
        </>
    );
}

