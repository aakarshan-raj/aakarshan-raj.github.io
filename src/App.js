import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router} from 'react-router-dom';


import { DeclareRoutes } from './main_components/routes';
import { ShowLinks } from './main_components/links';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
    <div className="App">

      <ShowLinks state={isDrawerOpen} stateFunction={toggleDrawer} />
      
      <DeclareRoutes />
    </div>
    </Router>
  );
}



export default App;
