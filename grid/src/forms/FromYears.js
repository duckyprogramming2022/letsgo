import React from "react";
import './mergeForm.css'


const FromYears = ({dat}) => {

  const years = [...Object.entries(dat[0])].map(([key, val]) => typeof val === 'number' ? key : null).filter(ele => ele !== null)
  const volumes = years.map((val) => dat.reduce((acc, curr) => acc + curr[val],0))
  
  const volumeOverYears = {}
  years.forEach((ele,index) => volumeOverYears[ele] = volumes[index])
  
  const inputs = Object.entries(volumeOverYears).map(([key,val]) => {
    return (<div id={key}>
      <label htmlFor={key}>{key}</label>
      <input type='number' id={key} defaultValue={val}/>
    </div>)
  })

  return <div className="years">{inputs}</div>
}

export default FromYears;