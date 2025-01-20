import styles from "../../../../../styles/styles.module.css"
import { useEffect } from "react";

import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"

import SubHeading from "../../../../../main_components/sub_heading";
import FormatCode from "../../../../../main_components/code_formatter";


export const ShowFourGraph = (props) => {
    const title = "Compute SCC of a Directed Graph";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>

            <h2>

                SCC (strongly connected graph): Every vertex in a SCC can be reached from every other vertex. <br />
                <br />
                Example:<br />
                <br />
                <div className={styles.img_container}><br />
                    <img src={img1} /><br />
                </div><br />
                <br />
                <SubHeading
                    text={"Finding every SCC in a DG"}
                    size={25}
                    start_color={"#fc1414"}
                    end_color={"#ed4545"}
                /><br />
                <br />
                Sink SCC: No outgoing edge to any other SCC from sink SCC.<br />
                <br />
                I is a sink SCC<br />
                <br />
                Source SCC: no incoming edge from any other SCC to source SCC.<br />
                <br />
                C is a source SCC<br />
                <br />
                One way to find all the SCC is explore a random vertex and find all connected vertex to it, but if that random vertex is not in sink SCC then we would make the graph un navigatable after removing the SCC vertex, so we choose a vertex from Sink SCC.<br />
                <br />
                How to find Sink SCC?<br />
                <br />
                Theorem: For two SCC, SCC1 and SCC2 if there is a vertex in SCC1 to SCC2, the largest postorder in SCC1 will be larger than SCC2.<br />
                <br />
                Example:<br />
                <br />
                <div className={styles.img_container}>
                    <img src={img2} />
                </div><br />
                <br />
                if largest postorder will be in SCC1 that means its the source SCC since no other SCC can reach it directly.<br />
                <br />
                Theorem: Let G be a directed graph. Let G' be the graph obtained by reversing all edges in G, i.e., the reverse of G. Then:<br />
                <br />
                <br />
                <ol><br />
                    <li>
                        G and G' have the same number of Strongly Connected Components (SCCs).</li><br />
                    <li>If v is a sink in G, then v is a source in G'.</li><br />
                    <li>If v is a source in G, then v is a sink in G'.</li><br />
                </ol>
                <br />
                <br />
                That concludes that if we can find source in G' that would be our sink in G.
                <br /><br />
                Using these two theorems we can find SCC of a graph and make a metagraph <br />which will be a DAG.<br />
                <br />
                Example:<br />
                <br /><br />


                <div className={styles.img_container}>
                    <img src={img3} />
                </div>
                <br /><br />
                Running DFS on G.<br /><br />

                Use this program: https://github.com/aakarshan-raj/Algorithms-on-Graphs/blob/main/extra/dfs.cc
                <br /><br />

                input should be in edge list form, first line would be
                <br /><br />
                <FormatCode
                    code={code_1}
                />
                <br />
                followed by edge list<br />
                <br />
                <br />
                <FormatCode
                    code={code_2}
                /><br />

                output would be:<br />

                <FormatCode
                    code={code_3}
                /><br />

                <FormatCode
                    code={code_4}
                /><br />

                <br />
                in graph form:<br />
                <br />

                <div className={styles.img_container}>
                    <img src={img4} />
                </div><br />


                Althrough it wasn't necessary to find post and pre order of vertex in G, its just shown for better understanding.<br /><br />

                Now if we reverse G and run DFS on it<br /><br />
                <br />
                input:<br />
                reserved edge list<br /><br /><br />


                <FormatCode
                    code={code_5}
                /><br />

                output:<br />
                <FormatCode
                    code={code_6}
                /><br /><br />

                in graph form:<br /><br />
                <div className={styles.img_container}>
                    <img src={img5} />
                </div>
                <br /><br />





            </h2>

        </>
    );
}

const code_1 = `<number of vertex> <number of edges>`;

const code_2 = `9 12
1 2
2 5
2 4
3 2
4 3
4 1
6 5
6 7
7 6
8 7
9 8
9 1`;

const code_3 = `<vertex>: <pre-order>/<post-order>`;

const code_4 = `1:1/10
2:2/9
3:6/7
4:5/8
5:3/4
6:11/14
7:12/13
8:15/16
9:17/18`

const code_5 = `9 12
1 4
1 9
2 1
2 3
3 4
4 2
5 2
5 6
6 7
7 6
7 8
8 9`;

const code_6 = `1:1/10
2:3/6
3:4/5
4:2/7
5:11/18
6:12/17
7:13/16
8:14/15
9:8/9`;

