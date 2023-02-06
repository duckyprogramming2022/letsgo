import React, {useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import data from './data/data';
import MergeForm from './forms/mergeForm';

const App = () => {


  const gridRef = useRef(); // Optional - for accessing Grid's API
 
  const [rowData, setRowData] = useState(data); // Set rowData to Array of Objects, one Object per Row
  const [rows, setRows] = useState([])
  const [formState, setFormState] = useState(false)

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {field : 'id', hide : true},
    {field: 'plant', filter: true, rowDrag : true},
    {field: 'customer', filter: true},
    {field: 'material', filter: true},
    {field: 'revStatus', filter: true},
    {field: '2023'},
    {field: '2024'},
    {field: '2025'},
    {field: '2026'},
    {field: '2027'},
    {field: '2028'},
    {field: '2029'}
  ]); 

  const defaultColDef = useMemo(()=> {
   return {
     sortable: true,
     filter: true
   };
   },[]);

  const onGridReady = useCallback((params) => {
    setRowData([...rowData], rowData.map(ele => ele["id"] = ele["plant"]+ele["customer"]+ele["material"]+ele["revStatus"]))
  }, [rowData]) ;

  const onSelectionChanged = useCallback(() =>  {

    const selectedRows = gridRef.current.api.getSelectedRows();
    let  selectedRowsString = '';

    const maxToShow = 5;
    setRows([])
    selectedRows.forEach((selectedRow, index) => {

      setRows(item => [...item, selectedRow])
      if (index > 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.id;

    });

    console.log(selectedRowsString)
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  }, []);

  const del = () => {
    const toBeDeleted = rows.map(ele => ele.id);
    setRowData(rowData.filter(ele => !toBeDeleted.includes(ele.id)))
  };

  const merge = () => {
    setFormState(true)
  };

  return (
    <div>
      <div className="example-header" style={{color:'black'}}>
        Selection:
        <span id="selectedRows" ></span>
      </div>
      <button onClick={merge}>merge</button>
      <button onClick={del}>delete</button>
      <div className="ag-theme-alpine-dark" style={{width: 2300, height: 1000}}>
      <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowDragManaged={true}
          rowSelection={'multiple'}
          suppressMoveWhenRowDragging={true}
          animateRows={true}
          onGridReady={onGridReady}
          onSelectionChanged={onSelectionChanged}
      ></AgGridReact>
      </div>
      <MergeForm renderBool={formState} renderAction={setFormState}/>
    </div>
  );
};

export default App;