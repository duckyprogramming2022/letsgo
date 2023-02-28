const MergeInputs = ({headerInfo ,setHeaderInfo}) => {


  const handleChange = (e) => {
    setHeaderInfo({...headerInfo, [e.target.id] : e.target.value})      
  }

  return (
    <div className="inputs">
      <label htmlFor="plant">Plant</label>
      <input type="text" id='plant' onChange={handleChange} defaultValue={headerInfo.plant} required/>
      <label htmlFor="customer">Customer</label>
      <input type="text" id='customer' onChange={handleChange} defaultValue={headerInfo.customer} required/>
      <label htmlFor="material">Material</label>
      <input type="text" id='material' onChange={handleChange} defaultValue={headerInfo.material} required/>
      <label htmlFor="revStatus">Rev Status</label>
      <input type="text" id='revStatus' onChange={handleChange} defaultValue={headerInfo.revStatus} required/>
    </div>
  )
}

export default MergeInputs;