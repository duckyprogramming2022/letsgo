import React from 'react'
import SplitInputs from './SplitInputs'

// we need this component to generate multiple input clusters
// a cluster for each split

const Splits = ({numberOfSplits, splitRender, headerInfo, setHeaderInfo}) => {

  const splitForms = [ ...Array(parseInt(numberOfSplits)).keys()].map(ele => <SplitInputs headerInfo={headerInfo}/>)

  if (splitRender) { 
    return <div>{splitForms}</div>
  }
}
  


export default Splits;