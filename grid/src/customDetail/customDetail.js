import React, { useEffect } from 'react';
import customerHeader from '../customHeaders/customerHeader';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';


ModuleRegistry.registerModules([ClientSideRowModelModule]);

const DetailCellRenderer = ({detailData, setDetailData, data, node, api }) => {
  const rowId = node.id;

  const colDefs = [
    {field : 'id', cellRenderer: 'agGroupCellRenderer'},
    {field: 'plant', filter: true, rowDrag : true},
    {field: 'customer', filter: true, headerComponent : customerHeader},
    {field: 'customerGroup', filter: true, hide : true},
    {field: 'material', filter: true},
    {field: 'revStatus', filter: true},
    {field: '2023'},
    {field: '2024'},
    {field: '2025'},
    {field: '2026'},
    {field: '2027'},
    {field: '2028'},
    {field: '2029'}
  ]

  const defaultColDef = {
    flex: 1,
    minWidth: 120,
  };

  const onGridReady = (params) => {
    const gridInfo = {
      id: node.id,
      api: params.api,
      columnApi: params.columnApi,

      
    };
    console.log('adding detail grid info with id: ', rowId.split('_')[1]);
    api.addDetailGridInfo(rowId, gridInfo);
  };

  const handleClick = () => {
    const toUnfuse = data.children;
    if (toUnfuse.length > 0) {
    toUnfuse.forEach(ele => {
      setDetailData(item => [...item, ele])
    })
    console.log(detailData, data.id)
    setDetailData(item => item.filter(ele => ele.id !== data.id))
  }
  }

  return (
    <div className="ag-theme-alpine-dark" style={{width: 2300, height: 1000}}>
      <button onClick={handleClick}>unmerge</button>
        <AgGridReact 
          id="detailGrid"
          className="full-width-grid ag-theme-alpine"
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowData={data.children}
          onGridReady={onGridReady}
        ></AgGridReact>
    </div>    
  );
};

export default DetailCellRenderer;