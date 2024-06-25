import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"
import trie from './imgs/trie.png'


export const ShowOneDatabase = (props) => {
  const title = "Trie";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr />
      <h2>Trie is an tree data structure, mainly used in autocorrection.</h2>
      <h2>Each node of a trie consist of a char which is part of a key and at the end of the last char we store the associated value.</h2>
      <h2>Each node can have a value if it forms a key.</h2>
      <div className={styles.img_container}>
        <img src={trie}></img>
      </div>
      <h2>For example:</h2>
      <h2>
        AND is a key, we have inserted each char of key in the nodes and they are conencted, and at the end we have the value. that's how trie stores key-value pair.
      </h2>
      <h2>we can perform three main operations on a Trie:</h2>
      <h2>
        <ol>
          <li>Put: put key and value pair.</li>
          <li>Get: get value associated with a key.</li>
          <li>Remove: remove a value associated with a key.</li>
        </ol>
      </h2>
      <h2>Implementation: <a href="https://github.com/aakarshan-raj/website_code_/tree/main/trie">Code</a></h2>
    </>
  );
}
