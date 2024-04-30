import styles from "../../../../../styles/styles.module.css"
import { useEffect } from "react";

import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"
import SubHeading from "../../../../../main_components/sub_heading";



export const ShowThreeGraph = (props) => {
    const title = "Directed Graphs";
    useEffect(() => {
        props.setTitle(title)
    }, []);
    return (
        <>
            <h1 className={styles.title}></h1>
            <hr></hr>

            <h2>In a directed graph each edge has a starting vertex and end vertex.</h2>
            <div className={styles.img_container}>
                <img src={img1} />
            </div>

            <h2>DFS can be ran on a Directed graph same way it runs on a un-directed graph, in a undirected graph its assumed that their is a bi-directiional node, but in a directed graph we are specific about the starting and ending of a edge</h2>

            <h2></h2>

            <SubHeading
                text={"DAG: Directed Acylic graph"}
                size={25}
                start_color={"#ADD8E6"}
                end_color={"#000080"}
            />

            <h2>A directed graph with no cycles, all the vertices can be linearly ordered</h2>

            <h2>Linearly ordering a directed graph involves arranging its vertices in a sequence where each vertex comes after all of its incoming neighbors. it's like organizing a series of destinations such that if there's a one-way street from location A to location B, A will be placed before B in the sequence. This arrangement ensures that there are no loops or cycles in the sequence, making it a helpful tool in tasks like scheduling, dependency resolution, and topological sorting.</h2>
            <h2>Example</h2>
            <div className={styles.img_container}>
                <img src={img2} />
            </div>
            <h2>Using Topological sort we can find linear ordering of a DAG, running DFS on a DAG would produce a linear order if we list all the vertex in descending order of their post-order number,
                We would also need to make changes in DFS to detect a cycle since post-ordering data doesn't give anything about presence of cycles. </h2>
            <h2>Required changes in DFS to detect cycle: By checking if we are visiting already visited node from out vector of visited nodes we can if a cycle exists or not.</h2>

            <SubHeading
                text={"Connectivity in DAG:"}
                size={25}
                start_color={"#ADD8E6"}
                end_color={"#000080"}
            />
            <h2>Two vertices v and u are connected we can reach u from v and v from u.
                Further we can group all the vertices that are reachable from one another, those would be called SCC(Strongly connected components)</h2>
            <div className={styles.img_container}>
                <img src={img3} />
            </div>
            <h2>SCC of above graph:</h2>
            <div className={styles.img_container}>
                <img src={img4} />
            </div>
            <h2>The above graph is not a DAG, but if we group all SCC of this directed graph into one node it will make a metagraph and that would be a DAG (metagraph of any directed graph is a DAG, since each SCC consists of all the reachable vertices and includes all the circles).</h2>
            <div className={styles.img_container}>
                <img src={img5} />
            </div>
            <h2><a href="#/graph/four">Computing SCC of a DAG</a></h2>
        </>
    );
}

