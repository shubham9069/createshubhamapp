
import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("enter text here ");
    const convert = ()=>{
        console.log('convertclicked');
        let newText= text.toUpperCase();
        setText(newText);
    }
    const textclear = ()=>{
      console.log('textclear');
      setText("");
    }
    const copytext = ()=>{
      console.log('copy text ');
      let paragraph = document.getElementById('textarea');
      paragraph.select();
      navigator.clipboard.writeText(paragraph.value);
      
    }
    const removespace = ()=>{
      console.log('remove space');
      let newtext=text.split(/[ ]+/); 
      setText(newtext.join(' '));
      
    }
    const change = (event)=>{
        console.log('changeclicked');
        setText(event.target.value);
    }

  return (
    
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
      <div className="form-group">
    <textarea className="form-control" value={text} onChange={change} id="textarea" rows="8"></textarea>
  </div>
  <button type="button"  onClick={convert} className="btn btn-primary m-3"> convert upper case</button>
  <button type="button"  onClick={textclear} className="btn btn-primary m-3">clear text</button>
  <button type="button"  onClick={copytext}  className="btn btn-primary m-3">copy text</button>
  <button type="button"  onClick={removespace} className="btn btn-primary m-3">remove space </button>
  
  <div className="container my-2">
    <h1>text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
  </div>
  </div>
    </>
  )
}
