import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"
import SubHeading from "../../../../../main_components/sub_heading"
import FormatCode from "../../../../../main_components/code_formatter";
export const ShowThreeDatabase = (props) => {
  const title = "B+Tree and its use in DBMS";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>
      <h2>

        A B+ tree is a self-balanced, ordered tree data structure commonly used in databases for efficient indexing.
        Operations like search, insert, and delete are performed in O(log n) time, making it an optimal choice for large datasets.
        <br />
        structure:<br /><br />
        - Internal nodes store only keys for navigation.<br />

        - All keys and associated values are stored in the leaf nodes.<br />

        - Leaf nodes are linked sequentially for range queries.<br />
        <br />
        Constraints:<br /><br />

        - For an M-way B+ tree:<br />

        - Maximum keys per node: M - 1
        <br />
        - Minimum keys per node: [M/2]-1
        <br />
        - Maximum child nodes per internal node: M
        <br />
        - Minimum child nodes per internal node: [M/2]
        <br />
        - Root constraints:
        <br /><br />
        - Keys: 1 &lt;= N &lt;= M - 1
        <br />
        - Children: 2 &lt;= N &lt;= M
        <br />
        Difference Between B+ Trees and B-Trees
        <br />
        - B+ Tree: Stores all values in the leaf nodes, while internal nodes are used only for navigation.
        <br />
        - B-Tree: Stores values in both internal and leaf nodes.
        <br />
        Examples: Inserting 1 to 10 in a B-tree or order 3<br />
        Constraints:<br />
        <br />
        - Maximum children: 3<br />

        - Minimum children: 2<br />

        - Maximum keys: 2<br />

        - Minimum keys: 1<br />

        - Root keys: 1&lt;=N&lt;=2<br />

        - Root children: 2&lt;=N&lt;=3<br />
        <br />
        Inserting 1:
        <FormatCode
          code={code_1}
        />
        Inserting 2:
        <FormatCode
          code={code_2}
        />
        Inserting 2:
        <FormatCode
          code={code_3}
        />
        Inserting 4:
        <FormatCode
          code={code_4}
        />
        Inserting 5:
        5 should be at the rightmost node but since the number of keys can only be 2 we split the node and pass the middle key to parent.
        <FormatCode
          code={code_5}
        />
        Inserting 6:
        <FormatCode
          code={code_6}
        />
        Inserting 7:
        7 would be inserted inserted at the rightmost but again the node cannot have more than
        2 keys so we would split it and pass middle key  6 to parent, in this case parent is the root and it cannot have 3 keys so we would further split the node and make middle key 4 new parent and make two child nodes
        <FormatCode
          code={code_7}
        />
        Inserting 8:
        <FormatCode
          code={code_8}
        />
        Inserting 9:
        <FormatCode
          code={code_9}
        />
        Inserting 10:
        <FormatCode
          code={code_10}
        />
        <br /><br /><br />
        Inserting 1 to 10 in a B+ Tree of Order 3<br /><br />

        Constraints:<br /><br />

        - Internal nodes store only keys.<br />

        - Leaf nodes store all values and are linked sequentially.<br />

        - Maximum children: 3<br />

        - Minimum children: 2<br />
        <br />

        Inserting 1:
        <FormatCode
          code={code_11}
        />
        Inserting 2:
        <FormatCode
          code={code_12}
        />
        Inserting 3:
        <FormatCode
          code={code_13}
        />
        Inserting 4:
        <FormatCode
          code={code_14}
        />
        Inserting 5:
        <FormatCode
          code={code_15}
        />
        Inserting 6:
        <FormatCode
          code={code_16}
        />
        Inserting 7:
        <FormatCode
          code={code_17}
        />
        Inserting 8:
        <FormatCode
          code={code_18}
        />
        Inserting 9:
        <FormatCode
          code={code_19}
        />
        Inserting 10:
        <FormatCode
          code={code_20}
        />


      </h2>
    </>
  );
}

const code_1 = `
[1]
`

const code_2 = `
[1, 2]
`


const code_3 = `
    [2]
   /   \\
 [1]   [3]
`


const code_4 = `
    [2]
   /   \\
 [1]   [3, 4]
`


const code_5 = `
       [2, 4]
      /   |   \\
   [1]   [3]  [5]
`


const code_6 = `
       [2, 4]
      /   |   \\
   [1]   [3]  [5, 6]
`


const code_7 = `
         [4]
       /   \\
    [2]    [6]
   /  \\    /  \\
 [1] [3] [5] [7]
`


const code_8 = `
         [4]
       /   \\
    [2]    [6]
   /  \\    /  \\
 [1] [3] [5] [7, 8]
`


const code_9 = `
         [4]
       /   \\
    [2]    [6, 8]
   /  \\    /   |   \\
 [1] [3] [5]  [7] [9]
`


const code_10 = `
         [4]
       /   \\
    [2]    [6, 8]
   /  \\    /   |    \\
 [1] [3] [5]  [7]  [9, 10]
`


const code_11 = `
[1]
`


const code_12 = `
[1,2]
`


const code_13 = `
	[2]
	/  \\
  [1]->[2,3]
`


const code_14 = `
	[2,3]
    /  \\ \\
  [1]->[2]->[3.4]
`


const code_15 = `
		[3]
       /   \\	 
	  [2] [4]
   /   /   \\  \\
 [1]->[2]->[3]->[4,5]
`


const code_16 = `
		 [3]
       /     \\     
     [2]    [4,6]
   /  /    /   \\  \\  
[1]->[2]->[3]->[4]->[5,6]
`


const code_17 = `
		  [3,5]
        /    |    \\     
     [2]    [4]    [6]
   /  /     / \\    |  \\  
[1]->[2]->[3]->[4]->[5]->[6,7]
`


const code_18 = `
		  [3,5]
        /    |    \\     
     [2]    [4]    [6,7]
   /  /     / \\    |   |   \\  
[1]->[2]->[3]->[4]->[5]->[6]->[7,8]
`


const code_19 = `
		          [5]
		    /            \\
        [3]                 [7]
      /     \\             /     \\
  [2]        [4]       [6]       [8]
 /   \\       /  \\      / \\       / \\ 
[1]->[2]->[3]->[4]->[5]->[6]->[7]->[8,9]
`


const code_20 = `
		          [5]
		    /            \\
        [3]                 [7]
      /     \\             /     \\
  [2]        [4]       [6]        [8]
 /   \\       /  \\      / \\       / | \\ 
[1]->[2]->[3]->[4]->[5]->[6]->[7]->[8]->[9,10]
`



