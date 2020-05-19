import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import FirstDesctination from  "./Components/FirstDestination";
import SecondDesctination from  "./Components/SecondDestination";
import ThirdDesctination from  "./Components/ThirdDestination";
import FourthDestination from  "./Components/FourthDestination";




function App() {
  return (
    <div className="container" style={{color: "red",height:"900px"}}>
     <Nav  style={{color: "red",height:"900px"}}></Nav>
     <FirstDesctination />
     <SecondDesctination/>
     <ThirdDesctination/>
     <FourthDestination/>
     
     
   
    </div>
  );
}

export default App;
