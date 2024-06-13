import React, {useState} from 'react'

//REACT HOOKS : React Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// They allow function components to have access to state and other React features.
//Hooks don't work inside classes — they let you use React without classes.

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleClearClick = () => {
    console.log("Clear Text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("All text cleared", "success");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState(""); //https://legacy.reactjs.org/docs/hooks-intro.html
  //In this case TEXT is the original text. setTEXT is the updation/updating function that updates the original text.
  //setText("Enter youre text here");

  return (
    <>
    <div className='container' style = {{color:props.mode === 'dark'?'white':'#212529'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* Now we can use the "text" from the hook to set the value of the text area */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor:props.mode === 'dark'?'#212529':'white', color:props.mode === 'dark'?'white':'#212529'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' style = {{color:props.mode === 'dark'?'white':'#212529'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text: "Enter text in the above text box to preview it here"}</p>
    </div>
    </>
  )
}
