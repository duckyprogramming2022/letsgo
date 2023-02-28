import React, {useEffect, useState} from "react";
import './Style/Form.css'
import FromYears from './Years/FromYears'
import MergeInputs from './Inputs/MergeInputs'
import FormButtons from './Buttons/FormButtons';


const MergeForm = ({formState, setFormState, setRowData, rows}) => {

  const [newVolumes, setNewVolumes] = useState([])
  const [headerInfo, setHeaderInfo] = useState({id : '', plant: '', customer : '', material: '', revStatus : ''})
  
  const mergedRows = rows;

  const del = () => {
    const toBeDeleted = rows.map(ele => ele.id);
    setRowData(item => item.filter(ele => !toBeDeleted.includes(ele.id)))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeaderInfo({...headerInfo, id : headerInfo.plant+headerInfo.customer+headerInfo.material+headerInfo.revStatus})
    const mushTogether = Object.assign(headerInfo, newVolumes)
    mushTogether.id = mushTogether.plant + mushTogether.customer + mushTogether.material + mushTogether.revStatus
    mushTogether['children'] = mergedRows
    setRowData(items => [...items, mushTogether])
    del()
    setFormState(false)
  };  

  if (formState) {  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Merge</h1>
        <MergeInputs headerInfo={headerInfo} setHeaderInfo={setHeaderInfo}/>
        <FromYears mergedRows={mergedRows} setNewVolumes={setNewVolumes}/>
        <FormButtons setFormState={setFormState}/>
      </form>
    )
  }  
};

export default MergeForm;