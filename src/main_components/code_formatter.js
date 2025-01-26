import { CodeBlock } from "react-code-blocks";
import {
    arta,
    hybrid, irBlack, monokai,
    sunburst,
    vs2015, xt256, zenburn, dracula
} from "react-code-blocks"

export const FormatCode = (props) => {
    return (
        <h3 style={{ fontSize: '13.6px' }}>
            <CodeBlock
                text={props.code}
                language={(props?.lang) ? props.lang : "rust"}
                showLineNumbers={true}
                theme={dracula}
            />
        </h3>
    );
}
export const HighLight = (props) => {
    return <span style={{ color: 'red', fontFamily: 'monospace', backgroundColor: 'black', fontSize:'14px' }}>{props.text}</span>
}
export default FormatCode;