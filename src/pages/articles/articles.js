import styles from '../../styles/styles.module.css';
import { useEffect } from "react";


export const ShowArticles = (props) => {
    const title = "Articles";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h2 className={styles.title}>
            </h2>
            <hr />
            <div className={styles.centered_container}>
            </div>
        </>

    );
}

