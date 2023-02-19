import 'ag-grid-enterprise';
import 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, {useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { MasterDetailModule } from 'ag-grid-enterprise'
import {ColumnsToolPanelModule} from 'ag-grid-enterprise'
import { MenuModule } from 'ag-grid-enterprise'
import data from './data/data';
import MergeForm from './Forms/Merge/mergeForm';
import dataInitial from './data/dataInitial';
import DetailCellRenderer from './customDetail/customDetail';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MasterDetailModule,
  MenuModule,
  ColumnsToolPanelModule,
]);



const App = () => {


  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(data); // Set rowData to Array of Objects, one Object per Row
  const [rows, setRows] = useState([])
  const [formState, setFormState] = useState(false)
  const [columnDefs, setColumnDefs] = useState(dataInitial); 

  const defaultColDef = useMemo(()=> {
   return {
     sortable: true,
     filter: true
   };
   },[]);

  const onGridReady = useCallback((params) => {
    setRowData([...rowData], rowData.map(ele => ele["id"] = ele["plant"]+ele["customer"]+ele["material"]+ele["revStatus"]));
  }, [rowData]) ;
  
  const del = () => {
    const toBeDeleted = rows.map(ele => ele.id);
    setRowData(rowData.filter(ele => !toBeDeleted.includes(ele.id)))
  };

  const merge = () => {
    setFormState(true)
  };

  const onSelectionChanged = useCallback(() =>  {
    const selectedRows = gridRef.current.api.getSelectedRows();
    setRows([])
    selectedRows.forEach((selectedRow, index) => setRows(item => [...item, selectedRow]));
  }, []);

  const detailCellRenderer = useMemo(()=>{
    return DetailCellRenderer;
  },[])

  const detailCellRendererParams = useMemo(() => {
    return {
      detailData : rowData,
      setDetailData : setRowData
    }
  },[rowData]);


  return (
    <div>
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
          onGridReady={onGridReady}
          masterDetail={true}
          detailRowHeight={310}
          onSelectionChanged={onSelectionChanged}
          detailCellRenderer={detailCellRenderer}
          detailCellRendererParams={detailCellRendererParams}
      ></AgGridReact>
      </div>
      <MergeForm renderAble={formState} setRenderAble={setFormState} setData={setRowData} mergeData={rows}/>
    </div>
  );
};

export default App;