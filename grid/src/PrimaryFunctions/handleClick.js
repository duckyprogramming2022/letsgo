
const handleClick = (e, setPrimaryFunction, setRowData, setFormState, rows, rowData) => {


  const primaryFunctionName = e.target.className;
  console.log(primaryFunctionName)
  setPrimaryFunction(primaryFunctionName)

  const del = () => {
    const toBeDeleted = rows.map(ele => ele.id);
    return setRowData(rowData.filter(ele => !toBeDeleted.includes(ele.id)))
  };

  console.log(rows.length)
  if (primaryFunctionName === 'delete') {
    return del()
  } else if (rows.length !== 0) {
    return setFormState(true)
  } else {
    alert('select a row')
  }
  
};

export default handleClick;