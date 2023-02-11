import React from "react"
import clickHandler from "../ClickHandler/Module"

const FormButtons = ({setRender}) => {
  return (
    <div className="btns">
      <button type="submit" className="btn">Submit</button>
      <button type="button" className="cancel" onClick={()=>clickHandler.Close(setRender)}>Close</button>
    </div>
  )
}

export default FormButtons