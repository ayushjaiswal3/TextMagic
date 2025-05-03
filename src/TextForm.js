import React,{useState} from 'react';

export default function TextForm(props) {

   const handleUpClick=()=>{
    console.log("clicked")
    let newText = text.toUpperCase()
   // setText("You click on handleUpClick");
   setText(newText)
   props.showAlert("Converted to Upper Case","success")

   }

   const handleDelete=()=>{
    console.log("clicked")
    setText("");
    props.showAlert("Deleted the content","danger")
   } 
   
   const handleOnChange=(event)=>{
    setText(event.target.value);
    console.log("onchange trigerred")
   }


    const [text , setText] = useState("");
   // setText("New Text");
   // console.  log(text);
    

  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? 'white' : 'grey'}}>
    <h1 className="mb-2" style={{color:props.mode==='dark' ? 'white' : 'grey'}}>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light' ? 'grey' : 'white', color:props.mode==='dark' ? 'red' : 'black'}}></textarea>
</div>


<button disabled = {text.length===0} className="btn btn-primary mx-3 my-3" onClick = {handleUpClick}>
    Convert
</button>
<button disabled = {text.length===0} type="button" className="btn btn-danger mx-3 my-3" onClick={handleDelete}>Delete</button>


    </div>

    <div className="container my-4">
        <h1>
            Your Text Summary
        </h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
   
   <h2>Preview</h2>
   <p>{text.length>0 ? text : "Nothing to preview!"}</p>
   </div>
    </>
  )
}
