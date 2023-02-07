import React, {useRef, useEffect} from "react";
import './mergeForm.css'

const MergeForm = ({renderBool,setRenderBool}) => {

  const formRef = useRef(null);

  if (renderBool) {

    const handleClickOutside = (event) => {
      if (event.target.textContent !== 'merge' && formRef.current && !formRef.current.contains(event.target)) {
        
        document.removeEventListener("click", handleClickOutside)
        setRenderBool(false);
      } 
      console.log(event.target, formRef.current, !formRef.current.contains(event.target))
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
        <div className="years">
          <label htmlFor="2023">2023</label>
          <input type='number' id='2023'/>
          <label htmlFor="2024">2024</label>
          <input type='number' id='2024'/>
          <label htmlFor="2025">2025</label>
          <input type='number' id='2025'/>
          <label htmlFor="2026">2026</label>
          <input type='number' id='2026'/>
          <label htmlFor="2027">2027</label>
          <input type='number' id='2027'/>
          <label htmlFor="2028">2028</label>
          <input type='number' id='2028'/>
          <label htmlFor="2029">2029</label>
          <input type='number' id='2029'/>
        </div>
        <div className="btns">
          <button type="submit" className="btn">Login</button>
          <button type="button" className="cancel" onClick={()=>setRenderBool(false)}>Close</button>
        </div>
      </form>
    )
  }  
};

export default MergeForm;