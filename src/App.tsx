import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pages } from './Components/Pages';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Pages/>
    </div>
  );
}

export default App;
