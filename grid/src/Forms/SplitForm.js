import React, {useState} from "react"
import FormButtons from "./Buttons/FormButtons"
import Splits from "./Inputs/Splits";
import './Style/Form.css'


const SplitForm = ({formState, setFormState, setRowData, rows}) => {
  


  const [headerInfo, setHeaderInfo] = useState({id : rows[0].id, plant: rows[0].plant, customer : rows[0].customer, material: rows[0].material, revStatus : rows[0].material})
  const [numberOfSplits, setNumberOfSplits] = useState(0)
  const [splitRender, setSplitRender] = useState(false);

  const handleSplitClick = (e) => {
    e.preventDefault();
    setHeaderInfo({...headerInfo, share : 100/numberOfSplits})    
    setSplitRender(true);
    console.log(headerInfo)
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
        <Splits numberOfSplits={numberOfSplits} splitRender={splitRender} headerInfo={headerInfo} setHeaderInfo={setHeaderInfo}/>
        <FormButtons setFormState={setFormState}/>
      </form>
    )
  }

}

export default SplitForm;