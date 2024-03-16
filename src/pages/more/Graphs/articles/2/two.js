import FormatCode from "../../../../../main_components/code_formatter"
import styles from "../../../../../styles/styles.module.css"

import zero from "./imgs/graph.drawio.svg"
import one from "./imgs/graph.drawio1.svg"
import two from "./imgs/graph.drawio2.svg"
import three from "./imgs/graph.drawio3.svg"
import four from "./imgs/graph.drawio4.svg"
import five from "./imgs/graph.drawio5.svg"
import six from "./imgs/graph.drawio6.svg"
import { useEffect } from "react";


export const ShowTwoGraph = (props) => {
  const title = "Number of connected components in a Graph";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr />
      <h2>In order to calculate the number of connected component in our undirected graph we can add extra bookkeeping in our algorithm.</h2>
      <h2>Example:</h2>
      <h2>Graph</h2>

      <div className={styles.img_container}>
        <img src={zero} />
      </div>
      <h2>Its Representation in program:</h2>
      <h2>| vertex | neighbours</h2>
      <h2>|    1      |  2, 3 |</h2>
      <h2>|    2      |  1, 3 |</h2>
      <h2>|    3      |  2. 1 |</h2>
      <h2>|    4      |  5    &nbsp;&nbsp;&nbsp;|</h2>
      <h2>|    5      |  4    &nbsp;&nbsp;&nbsp;|</h2>
      <h2>|    6      |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</h2>
      <h2>The algorithm take an initial index as node and then visit's all the connected nodes. </h2>
      <h2>we only backtrack once all the nodes are visited from the origin node. </h2>
      <h2>And then we look for unvisited nodes, thats when we can increases the count of connected component.</h2>

      <h2>Code:</h2>

      <FormatCode
        code={code_1}
        lang={"c++"}
      />
      <h2>Visual representation of graph state when we run this algorithm on above graph.</h2>

      <div className={styles.img_container}>
        <img src={zero} />
      </div>
      <br></br>
      <div className={styles.img_container}>
        <img src={one} />
      </div>
      <br></br>

      <div className={styles.img_container}>
        <img src={two} />
      </div>
      <br></br>

      <div className={styles.img_container}>
        <img src={three} />
      </div>
      <br></br>

      <div className={styles.img_container}>
        <img src={four} />
      </div>
      <br></br>

      <div className={styles.img_container}>
        <img src={five} />
      </div>
      <br></br>

      <div className={styles.img_container}>
        <img src={six} />
      </div>

    </>
  );
}

const code_1 = `#include <iostream>
#include <vector>

using std::vector;

void explore(vector<vector<int>> adj, vector<int> &visited, int node)
{
  visited[node] = true;
  for (const int &x : adj[node])
  {
    if (!visited[x])
    {
      explore(adj, visited, x);
    }
  }
}

int number_of_components(vector<vector<int>> &adj)
{
  int res = 0;
  vector<int> visited(adj.size(),false);
  for (int i = 0; i < adj.size(); i++)
  {
    if(!visited[i]){
      res++;
      explore(adj,visited,i);
    }
  }
  return res;
}

int main()
{
  size_t n, m;
  std::cin >> n >> m;
  vector<vector<int>> adj(n, vector<int>());
  for (size_t i = 0; i < m; i++)
  {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
    adj[y - 1].push_back(x - 1);
  }
  std::cout << number_of_components(adj);
}`;

