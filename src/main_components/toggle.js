import React, { useState } from 'react';
import styles from "../styles/styles.module.css"

const Toggle = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
        props.setMode(prev => !prev);
    };

    const containerStyle = {
        alignItems: 'center',
        paddingLeft: "10px",
        paddingRight: "10px"
    };

    const buttonStyle = {
        border: 'none',
        borderRadius: '20px',
        height: '24px',
        width: '48px',
        padding: '0',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: isToggled ? 'green' : 'red',
    };

    const knobStyle = {
        position: 'absolute',
        top: '2px',
        left: isToggled ? 'calc(100% - 22px)' : '2px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        height: '20px',
        width: '20px',
        transition: 'left 0.3s ease-in-out',
    };

    return (
        <div className={styles.issueBanner}>

            <div style={containerStyle} className={`${isToggled ? 'toggled' : ''}`}>
                <button onClick={handleToggle} style={buttonStyle}>
                    <div style={knobStyle}></div>
                </button>
            </div>
        </div>
    );
};

export default Toggle;
