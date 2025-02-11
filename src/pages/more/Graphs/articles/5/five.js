import styles from "../../../../../styles/styles.module.css"
import { useEffect } from "react";

import img1 from "./images/1.png"
import img2 from "./images/2.png"
import FormatCode from "../../../../../main_components/code_formatter";


export const ShowFiveGraph = (props) => {
    const title = "Detecting Cycles in a Directed Graph";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>

            <h2>
                To detect a cycle in a directed graph we can make slight modification on DFS to track if we visit a already visited vertex, with a slight modification.
                <br />
                If we have this graph
                <br /><br />
                <div className={styles.img_container}>
                    <img src={img1} />
                </div><br />

                The call stack of Explore will look like this:
                <br />
                <br />
                <div className={styles.img_container}>
                    <img src={img2} />
                </div><br />

                <br /><br />
                If we only check if we are visiting a already visited node we can mistakenly detect a circle when the recusive function is removed from stack and we go back like in this case.
                <br />
                <br />
                We explore 5 at end and when we go back the EXPLORE(2) we will try to visit 5 but its already been visited, But that doesn't mean there is a cycle since if there was a cycle it would have been detected in EXPLORE(5).
                <br />
                <br />
                We can mark 5 or any vertex whose all vertex are explored as visited and check for it when detecting a cycle.
                <br />
                <br />
                <FormatCode
                    code={code_1}
                /><br />
                <br />
            </h2>

        </>
    );
}

const code_1 = `void explore(bool &cycle, int vertex, vector<vector<int>> &adj, vector<int> &visited)
{
    visited[vertex] = 1;
    for (int &w : adj[vertex])
    {
        if (visited[w] == 1)
        {
            cycle = 1;
        }
        else
        {
            explore(cycle, w, adj, visited);
        }
    }
    visited[vertex] = 2;
}
`;

