import React from "react"

const FormButtons = ({setFormState}) => {
  return (
    <div className="btns">
      <button type="submit" className="btn">Submit</button>
      <button type="button" className="cancel" onClick={()=>setFormState(false)}>Close</button>
    </div>
  )
}

export default FormButtons