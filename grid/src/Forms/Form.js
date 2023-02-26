import React from "react";
import MergeForm from './mergeForm'
import SplitForm from "./splitForm";

const DecideOnForm = ({formState, setFormState, primaryFunction, setPrimaryFunction, setRowData, rows}) => {
  if (primaryFunction === 'merge') {
    return <MergeForm formState={formState} primaryFunction={primaryFunction} setPrimaryFunction={setPrimaryFunction} setFormState={setFormState} setRowData={setRowData} rows={rows}/>
  } else {
    return <SplitForm formState={formState} primaryFunction={primaryFunction} setPrimaryFunction={setPrimaryFunction} setFormState={setFormState} setRowData={setRowData} rows={rows}/>
  }
}

export default DecideOnForm;