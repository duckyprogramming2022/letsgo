import React, {useEffect, useState} from "react"
import FormButtons from "./Buttons/FormButtons";
import './Style/Form.css'


const SplitForm = ({formState, setFormState, setRowData, rows}) => {




  if (formState) {
    return (
      <form className="form-container" >
        <h1>Split</h1>
        <FormButtons setFormState={setFormState}/>
      </form>
    )
  }
}

export default SplitForm;