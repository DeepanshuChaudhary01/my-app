import React from 'react'

export default function Alert(props) {
    // const capitalise=(word)=>{//function to capitalise 's' of success
    //     const w=word.toLowerCase();
    //     return w.charAt(0).toUpperCase()+w.slice(1);
        
    // }
  return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
