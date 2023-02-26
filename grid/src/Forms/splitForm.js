import React, {useEffect, useState} from "react"
import FormButtons from "./Buttons/FormButtons"
import Splits from "./Inputs/split";
import './Style/Form.css'


const SplitForm = ({formState, setFormState, setRowData, rows}) => {

  const [headerInfo, setHeaderInfo] = useState({id : '', plant: '', customer : '', material: '', revStatus : ''})
  const [numberOfSplits, setNumberOfSplits] = useState(0)
  const [splitRender, setSplitRender] = useState(false);

  const handleSplitClick = (e) => {
    e.preventDefault();    
    setSplitRender(true)
  }

  const splitHandleChange = (e) => {
    setNumberOfSplits(e.target.value)
  }

  if (formState) {
    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <h1>Split</h1>
        <div className="inputs">
          <label htmlFor="plant">Splits</label>
          <input className="howmanysplits" id='splits' type='number' onChange={splitHandleChange} defaultValue={numberOfSplits}></input>
          <button className="numberOfSplits" onClick={handleSplitClick}>Split</button>
        </div>
        <Splits numberOfSplits={numberOfSplits} splitRender={splitRender}/>
        <FormButtons setFormState={setFormState}/>
      </form>
    )
  }
}

export default SplitForm;