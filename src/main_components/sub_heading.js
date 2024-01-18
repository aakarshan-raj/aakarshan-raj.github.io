
const SubHeading = (props) => {
    const subHeadingStyle = {
        textDecoration: 'underline gray',
        backgroundImage: (props.start_color)? `linear-gradient(45deg, ${props.start_color}, ${props.end_color})` : 'linear-gradient(45deg, #ff69b4, #ff0000)',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
        WebkitBackgroundClip: 'text',
        fontSize: (props.size)? `${props.size}px` : '30px'
    };

    return (
        <div style={subHeadingStyle}>
            <br />
            {props.text}
            <br />
        </div>
    );
};
export default SubHeading;