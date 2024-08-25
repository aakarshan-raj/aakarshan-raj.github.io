import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { useEffect } from "react";

// import img1 from "./img/1.png"


export const ShowFourCpp = (props) => {
    const title = "";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>
            <h2>
                {/* <div className={styles.img_container}>
                    <img src={img2} />
                </div> */}
            </h2>

        </>
    );
}