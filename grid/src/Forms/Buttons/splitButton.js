import React from "react"

const SplitButton = () => {
  return (
    <div className="split">
      <button type="submit" className="btn">Submit</button>
      <button type="button" className="cancel" onClick={()=>setFormState(false)}>Close</button>
    </div>
  )
}

export default SplitButton