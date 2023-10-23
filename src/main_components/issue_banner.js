import styles from "../../src/styles/styles.module.css"


const IssueBanner = () => {

    return (
        <div className={styles.issueBanner}>
            <h3>
                <a href="https://github.com/aakarshan-raj/aakarshan-raj.github.io/issues/new" target="_blank" className={styles.anchorText}>
                    Report any issue
                </a>
            </h3>
        </div>
    );
}
export default IssueBanner;