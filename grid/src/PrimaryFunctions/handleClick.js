
const handleClick = (e, setPrimaryFunction, setRowData, setFormState, rows, rowData) => {


  const primaryFunctionName = e.target.className;
  console.log(primaryFunctionName)
  setPrimaryFunction(primaryFunctionName)

  const del = () => {
    const toBeDeleted = rows.map(ele => ele.id);
    return setRowData(rowData.filter(ele => !toBeDeleted.includes(ele.id)))
  };

  if (primaryFunctionName === 'delete') {
    return del()
  } else {
    return setFormState(true)
  }  
  
};

export default handleClick;