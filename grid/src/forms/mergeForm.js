import React from "react";
import Draggable from 'react-draggable';
import './mergeForm.css'
const MergeForm = ({renderBool}) => {
  if (renderBool) {
    return (
      <Draggable>
          <form class="form-container">
            <h1>Merge</h1>
            <div className="inputs">
              <label htmlFor="plant"><b>Plant</b></label>
              <input type="text" id='plant' required/>
              <label htmlFor="customer"><b>Customer</b></label>
              <input type="text" id='customer' required/>
              <label htmlFor="material"><b>Material</b></label>
              <input type="text" id='material' required/>
              <label htmlFor="revStatus"><b>Rev Status</b></label>
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
              <button type="submit" class="btn">Login</button>
              <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
            </div>
          </form>
      </Draggable>
    )
  }  
};

export default MergeForm;