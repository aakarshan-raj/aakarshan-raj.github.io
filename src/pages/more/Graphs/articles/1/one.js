import IssueBanner from "../../../../../main_components/issue_banner";
import FormatCode from "../../../../../main_components/code_formatter"
import styles from "../../../../../styles/styles.module.css"
import one from "./imgs/one.svg"
import SubHeading from "../../../../../main_components/sub_heading";


export const ShowOneGraph = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Path between two vertices</h1>

          <div className={styles.img_container}>
            <img src={one} />
          </div>
          <h2>
            In order to find if a path exists between two vertex in a graph (G), we can use DFS(depth first search).</h2>
          <h2>Before talking about the algorithm, The most important part is how the graph will be represented in computer program.</h2>
          
          <SubHeading
            text={"There are 3 main ways to represent graphs."}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />
            <ol>
              <h2><li>Adjacent Matrix</li></h2>
              <h2><li>Edge List</li></h2>
              <h2><li>Adjacent List</li></h2>

            </ol>

          <h2>Most of graph operations are performed faster on Adjacent List. As</h2>
          <h2>Finding all edges is: O(E)</h2>
          <h2>finding all neighours is O(degree)</h2>
          <h2>finding a edge is O(degree)</h2>
          <h2>where degree is number of edges connected to a vertex.</h2>

          <h2>To traverse a graph we can use simple a recursive apporach of DFS.
            We will pick a node and visits all its neighbours and in doing so we will visit all
            the neighbours of the neighbours and so on. While visiting each node we will maintain
            a vector or any data structure that will contain all the visited nodes.</h2>

          <h2>This is great to visit all the connected nodes of a graph, With slight modifications we can also visit all the nodes of the graph regardless if they are connceted or not.</h2>
          <h2>Pesudo code:</h2>
          <FormatCode
            code={code_1}
          />

          <h2>This way all the connected nodes of a graph can be visited and we can find if a path exists between two vertex.
          </h2>
          <SubHeading
            text={"code"}
            size={25}
            start_color={"#ADD8E6"}
            end_color={"#000080"}
          />          <FormatCode
            code={code_2}
          />
          <h2>1. Taking input as edge list</h2>
          <h2>2. Converting Edge list to adjacent list</h2>
          <h2>3. Using Vector of bool to keep track of all visited nodes</h2>
          <h2>4. Using index of vector to represent vertex</h2>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `Explore(v)
v = visited;
for(x:all neighours of v){
   if x is not visisted{
     Explore(x)
   }
}`;

const code_2 = `#include <iostream>
#include <vector>

using std::vector;

void explore(vector<vector<int>> adj, int node, vector<bool> &visited)
{
  visited[node] = true;
  for (auto const &x : adj[node])
  {
    if (!visited[x])
    {
      explore(adj, x, visited);
    }
  }
}

int reach(vector<vector<int>> &adj, int x, int y)
{
  vector<bool> visited(adj.size(), false);
  explore(adj, x, visited);
  return visited[y] ? 1 : 0;
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
  int x, y;
  std::cin >> x >> y;
  std::cout << reach(adj, x - 1, y - 1);
}`;