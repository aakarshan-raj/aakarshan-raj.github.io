import styles from '../../styles/styles.module.css';
import IssueBanner from '../../main_components/issue_banner'
import SubHeading from '../../main_components/sub_heading'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export const ShowMain = (props) => {
  const title = "";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  const expandHideArticleList = () => {
    setArticleListExpanded(!articleListExpanded)
  }

  const [articleListExpanded, setArticleListExpanded] = useState(false)

  return (
    <>
      <h2 className={styles.title}>
        <SubHeading text="RSA key for any communication" />
      </h2>
      <div className={styles.centered_container}>
        <div className={styles.code_background_rsa}>
          <h2>{keys}</h2>
        </div>
      </div>
      <div className={styles.centered_container}>
        <div className={styles.code_background_rsa}>
          <h2>{email}</h2>
        </div>
      </div>
      <div className={styles.title}>
        <h6>
          <div className={styles.expand_link} onClick={expandHideArticleList}>
            Articles {articleListExpanded ? '↑' : '↓'}
          </div>
          {articleListExpanded && <div>
            <Link to="/interpreter/parser">How do parsers work?</Link>
            <br></br>
            <br></br>

            <Link to="/Assembly/instruction-set">Instruction Set</Link>
            <br></br>
            <br></br>

            <Link to="/NandToTetris/cpu">Implementing a CPU</Link>
            <br></br>
            <br></br>

            <Link to="/NandToTetris/ram16k">RAM from scrach</Link>
            <br></br>
            <br></br>

            <Link to="/NandToTetris/computer">Assembling computer with previous components</Link>
            <br></br>
            <br></br>

            <Link to="/Assembly/winDbg-intel-manual">Getting started with winDbg and intel manual</Link>
            <br></br>
            <br></br>

            <Link to="/rust/four">Chat Server in Rust(tokio)</Link>
            <br></br>
            <br></br>

            <Link to="/rust/six">Making GUI application with ICED in Rust</Link>
            <br></br>
            <br></br>

            <Link to="/cpp/ecs">ECS Design Pattern</Link>
            <br></br>
            <br></br>

            <Link to="/cpp/collision-detection-and-resolution">Collision Detection in Games</Link>
            <br></br>
            <br></br>

            <Link to="/articles/concurrency-in-action">Lessons learnt from "C++ Concurrency in Action"</Link>
            <br></br>
            <br></br>

            <Link to="/graph/one">Path between two vertices</Link>
            <br></br>
            <br></br>

            <Link to="/graph/two">Number of connected components in a Graph</Link>
            <br></br>
            <br></br>

            <Link to="/graph/compute-scc-dg">Compute SCC of a Directed Graph</Link>
            <br></br>
            <br></br>

            <Link to="/database/b+tree-and-dbms">B+Tree and its use in DBMS</Link>
            <br></br>
            <br></br>
          </div>}
        </h6>
      </div>
    </>

  );
}

const keys =
  `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8UHVDGDeKxEQjLRj+me8
  G7CpR2rpSi3H4Peer87APczsjXPsyawLTY7QphlEnsMnY7xUj96bO8yV7uJvWQp4
  cA+nkCHrnyvi/H/2jtUR1hA6bVgapsMZwK144OtMd/Br+Sze3EeJ3v/I5LNfuL8d
  Jm0kym3iBjbtKaa/dsUtp6QHNcuugDe+GeV532DxLqWJ1kshOBi41mUvTfRlk2NI
  KF5tfEpruncB/3eN2k0LzDSTaub98tWeG+HbboxTQgSjBT9Pqco7urP3KRqLh5fg
  O7nCFe4BzAzFw8JR1G/CXwwe+sWc9k/9fannz1DBMTt2t3oqUgCfQTQRkMfJ7jyy
  YwIDAQAB
  -----END PUBLIC KEY-----
`;

const email = `0x616b616@proton.me`