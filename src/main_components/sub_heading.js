import styles from "../../src/styles/styles.module.css"


const SubHeading = (props) => {

    return (
        <div className={styles.sub_heading}>
            <br></br>
            {props.text}
            <br></br>
            
        </div>
    );
}
export default SubHeading;