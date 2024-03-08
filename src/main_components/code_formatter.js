import { CodeBlock } from "react-code-blocks";
import {
    arta,
    hybrid, irBlack, monokai,
    sunburst,
    vs2015, xt256, zenburn
} from "react-code-blocks"

const FormatCode = (props) => {
    return (
        <h3>
            <CodeBlock
                text={props.code}
                language={(props?.lang) ? props.lang : "rust"}
                showLineNumbers={true}
                theme={monokai}
            />
        </h3>
    );
}

export default FormatCode;