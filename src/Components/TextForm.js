import React, { useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success");
    }
    
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared","success");
    }

    const handleExtraClick = ()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are reduced","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className = "container" style = {{color : props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='light'?'white':'black', color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear</button>
        </div>
        <div className="container my-2" style = {{color : props.mode==='light'?'black':'white'}}>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{(0.266666 * text.split(" ").filter((element)=>{return element.length !== 0}).length).toFixed(1)} seconds to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )       
}
    