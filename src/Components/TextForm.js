import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick=()=>{//using arrow function
        // console.log("UpperCase was Clicked.")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to upper case",'success')
    }
    const HandleLoClick=()=>{//using arrow function
      // console.log("LowerCase was Clicked.")
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text has been converted to lower case",'success')
  }
  const HandleClearClick=()=>{//using arrow function
    let newText="";
    setText(newText);
    props.showAlert("Text has been cleared",'success')
}

const HandleReverseClick=()=>{//using arrow function
  let newText=text;
  for(let i=0;i<text.length;i++)
  {
    let c=text[i];
    console.log(c.toLowerCase());

      if(c===c.toLowerCase())
      {
        newText = newText.substring(0,i)+c.toUpperCase()// setCharAt(newText,i,c.toUpperCase());
        console.log(newText)
        // newText[i]=c.toUpperCase();
      }
      else
      {
        newText = newText.substring(0,i)+c.toLowerCase()
        console.log(newText)
        // newText = setCharAt(newText,i,c.toLowerCase());
      }
    
  setText(newText);
  props.showAlert("Text has been reversed",'success')
}
}

    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const [text,setText]=useState('Enter text here');
    // text='abc' wrong way
    // setText('abc') correct way
  return (
    <>
    <div className='container' style={{color: props.theme==='light'?'black':'white'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="box" class="form-label">Example textarea</label> */}
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.theme==='dark'?'black':'white', color: props.theme==='light'?'black':'white'}} value={text} id="box" rows="8"></textarea>
        <button className="btn btn-primary" onClick={HandleUpClick}>Convert to Upper-Case</button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lower-Case</button>
        <button className="btn btn-primary " onClick={HandleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={HandleReverseClick}>Reverse Case</button>
        </div>
    </div>
    <div className='container' style={{color: props.theme==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} and {text.length}</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>
  )
};
