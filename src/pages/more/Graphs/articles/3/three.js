import IssueBanner from "../../../../../main_components/issue_banner";
import FormatCode from "../../../../../main_components/code_formatter"
import styles from "../../../../../styles/styles.module.css"
import SubHeading from "../../../../../main_components/sub_heading";


export const ShowThreeGraph = () => {
    return (
        <div className={styles.book_container}>
            <div className={styles.book}>
                <div className={styles.book_content}>
                    <h1 className={styles.title}>Directed acyclic graph(DAG)</h1>
                    <hr></hr>

                </div>
            </div>
            <IssueBanner />
        </div>
    );
}

