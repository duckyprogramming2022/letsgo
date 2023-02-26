import React from 'react'
import FormInputs from './FormInputs'

const Splits = ({numberOfSplits, splitRender}) => {

  const splitForms = [ ...Array(parseInt(numberOfSplits)).keys()].map(ele => <FormInputs headerInfo=''/>)

  if (splitRender) { 
    return <div>{splitForms}</div>
  }
}
  


export default Splits;