import customerHeader from "../customHeaders/customerHeader";

const dataInitial = [
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

export default dataInitial;