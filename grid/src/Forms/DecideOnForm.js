import React from "react";
import MergeForm from './MergeForm'
import SplitForm from "./SplitForm";

const DecideOnForm = ({formState, setFormState, primaryFunction, setRowData, rows}) => {
  console.log(formState,rows.length )
  
  if (primaryFunction === 'merge' && rows.length > 0) {
    return <MergeForm formState={formState} setFormState={setFormState} setRowData={setRowData} rows={rows}/>
  } else if (primaryFunction === 'split' && rows.length > 0) {
    return <SplitForm formState={formState} setFormState={setFormState} setRowData={setRowData} rows={rows}/> 
  }
  
}

export default DecideOnForm;