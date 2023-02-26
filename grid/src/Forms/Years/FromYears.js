import React, { useEffect } from "react";
import '../Style/Form.css'


const FromYears = ({dat, setVolumes}) => {

  const datMerged = dat.reduce((acc, current) => {
    Object.entries(current).forEach(([key, val]) => {
      if (typeof val === 'number') {
        acc[key] = (acc[key] || 0) + val;
      } 
    });
    return acc;
  }, {}); 
  
  const inputs = Object.entries(datMerged).map(([key,val]) => {
    return (<div id={key}>
      <label htmlFor={key}>{key}</label>
      <input type='number' id={key} defaultValue={val}/>
    </div>)
  })

  useEffect(()=>{
    setVolumes(datMerged)
  },[dat])

  
  return <div className="years">{inputs}</div>
}

export default FromYears;