import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import TAN from './Components/TAN';





function App() {
  const [mode, setmode] = useState('light');
  const [bT, setbT] = useState('Dark');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
      setalert({
        msg : message,
        type : type
      });
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const btnClick = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black'
      setbT('Light');
      showAlert("Dark mode is ON","success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      setbT('Dark');
      showAlert("Light mode is ON","success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title ="Tanmay" aboutText ="About Tanmay" mode = {mode} btnClick = {btnClick} bT = {bT}/>      
        <Alert alert = {alert}/>
        <div className="container my-3"> 
          <Switch>
            <Route path="/about">
              <About mode = {mode}/>
            </Route>
            <Route path="/">
              <TextForm heading = "Enter text here hahaha" mode = {mode} showAlert = {showAlert}/>
            </Route>
            <Route>
              <TAN>
              </TAN>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
