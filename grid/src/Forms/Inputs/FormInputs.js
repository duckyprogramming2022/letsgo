const FormInputs = ({columnInfo ,setColumnInfo}) => {

  const handleChange = (e) => {
    setColumnInfo({...columnInfo, [e.target.id] : e.target.value})      
  }

  return (
    <div className="inputs">
    <label htmlFor="plant">Plant</label>
    <input type="text" id='plant' onChange={handleChange} defaultValue={columnInfo.plant} required/>
    <label htmlFor="customer">Customer</label>
    <input type="text" id='customer' onChange={handleChange} defaultValue={columnInfo.customer} required/>
    <label htmlFor="material">Material</label>
    <input type="text" id='material' onChange={handleChange} defaultValue={columnInfo.material} required/>
    <label htmlFor="revStatus">Rev Status</label>
    <input type="text" id='revStatus' onChange={handleChange} defaultValue={columnInfo.revStatus} required/>
    </div>
  )
}

export default FormInputs;