import { Link } from 'react-router-dom';
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
            <h1>1. <Link to="/articles/go-lessons">Lessons learnt from "Learn concurrent programming with go" </Link></h1>
            <h1>2. <Link to="/articles/virtual-machine">Virtual Machine </Link></h1>
            <h1>3. <Link to="/articles/concurrency-in-action">Lessons learnt from "C++ Concurrency in Action" </Link></h1>
        </>

    );
}

