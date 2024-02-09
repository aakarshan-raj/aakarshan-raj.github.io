import { CodeBlock, androidstudio } from "react-code-blocks";

const FormatCode = (props) => {
    return (
        <h3>
            <CodeBlock
                text={props.code}
                language={(props?.lang) ? props.lang : "rust"}
                showLineNumbers={true}
                theme={androidstudio}
            />
        </h3>
    );
}

export default FormatCode;