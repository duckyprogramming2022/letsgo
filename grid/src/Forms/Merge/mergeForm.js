import React, {useEffect, useState} from "react";
import './mergeForm.css'
import FromYears from './Years/FromYears'
import FormInputs from './Inputs/FormInputs'
import FormButtons from "./Buttons/FormButtons";
import clickHandler from './ClickHandler/Module'

const MergeForm = ({renderAble,setRenderAble, setData, mergeData}) => {

  const [newVolumes, setNewVolumes] = useState([])
  const [headerInfo, setHeaderInfo] = useState({id : '', plant: '', customer : '', material: '', revStatus : ''})
  
  const mergedRows = mergeData;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setHeaderInfo({...headerInfo, id : headerInfo.plant+headerInfo.customer+headerInfo.material+headerInfo.revStatus})
    const mushTogether = Object.assign(headerInfo, newVolumes)
    mushTogether.id = mushTogether.plant + mushTogether.customer + mushTogether.material + mushTogether.revStatus
    mushTogether['children'] = mergedRows
    setData(items => [...items, mushTogether])
    
    setRenderAble(false)
  };


  useEffect(()=>{

    const handleClicksOutside = (event) => {
      clickHandler.Outside(event, setRenderAble)
    }
    
    if (renderAble) {
      document.addEventListener("click", handleClicksOutside)
    }
    return()=> {
      document.removeEventListener("click", handleClicksOutside)
    }
  },[renderAble])

  

  if (renderAble) {  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Merge</h1>
        <FormInputs columnInfo={headerInfo} setColumnInfo={setHeaderInfo}/>
        <FromYears dat={mergedRows} setVolumes={setNewVolumes}/>
        <FormButtons setRender={setRenderAble}/>
      </form>
    )
  }  
};

export default MergeForm;