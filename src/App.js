import React from 'react';
import { useState } from 'react';
import Aboutus from './component/Aboutus';
import Navbar from './component/Navbar';
import Textform from './component/Textform';


function App() {
  const [mode, setMode] = useState('light');

  const toggle = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color = 'white';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      

    }
  }
  
  return (
    <>
    
    <Navbar title="textutils" link="aboutus" thememode={mode} toggle={toggle}/>
   <Textform heading="enter text here " />
   <Aboutus/>
     
    </>
  );
}



export default App
