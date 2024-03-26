import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { DeclareRoutes } from './main_components/routes';
import { ShowLinks } from './main_components/links';
import styles from "./styles/styles.module.css"
import Toggle from './main_components/toggle';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [lightMode, SetMode] = useState(false);
  const [title, setTitle] = useState("");
  return (
    <Router>
    <style>
      {
        `
        body{
          background-color: ${lightMode?'#88AB8E':'black'};
        }
        `
      }
    </style>
      <div className="App">
        <ShowLinks state={isDrawerOpen} stateFunction={toggleDrawer} />
        <div className={styles.book_container}>
          <div className={lightMode ? styles.light_book : styles.book}>
            <div className={lightMode ? styles.light_book_content : styles.book_content}>
              <h1 className={lightMode ? styles.light_title : styles.title}>{title}</h1>

              <DeclareRoutes setTitle={setTitle} />

            </div>
          </div>
        </div>
        <Toggle setMode={SetMode} />
      </div>
    </Router>

  );
}



export default App;
