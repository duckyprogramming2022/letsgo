import React, {useRef} from "react";
import './mergeForm.css'
import FromYears from "./FromYears";

const MergeForm = ({renderBool,setRenderBool, mergeData}) => {


  const mergedRows = mergeData;

 
  const formRef = useRef(null);

  if (renderBool) {
    

    const handleClickOutside = (event) => {
      if (event.target.textContent !== 'merge' && formRef.current && !formRef.current.contains(event.target)) {
        
        document.removeEventListener("click", handleClickOutside)
        setRenderBool(false);
      } 
    }

    document.addEventListener("click", handleClickOutside);
  
    return (
      <form className="form-container" ref={formRef}>
        <h1>Merge</h1>
        <div className="inputs">
          <label htmlFor="plant">Plant</label>
          <input type="text" id='plant' required/>
          <label htmlFor="customer">Customer</label>
          <input type="text" id='customer' required/>
          <label htmlFor="material">Material</label>
          <input type="text" id='material' required/>
          <label htmlFor="revStatus">Rev Status</label>
          <input type="text" id='revStatus' required/>
        </div>
        <FromYears dat={mergedRows}/>
        <div className="btns">
          <button type="submit" className="btn">Login</button>
          <button type="button" className="cancel" onClick={()=>setRenderBool(false)}>Close</button>
        </div>
      </form>
    )
  }  
};

export default MergeForm;