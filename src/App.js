import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import Test from './components/Test'
function App() {
  return (
    <div className="">
    
      <Router>
      <Test></Test>
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/loginpage" exact component={LoginPage} />

      </Router>
    </div>
  );
}

export default App;
