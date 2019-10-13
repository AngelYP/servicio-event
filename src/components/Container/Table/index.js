import React from 'react';
import MaterialTable from 'material-table';
import { columns, data, tableIcons, localization } from '../../../services/guests'

export default function Table() {
  const [state, setState] = React.useState({
    columns: columns,
    data: data,
  });

  return (
    <MaterialTable
      title="Invitados"
      columns={state.columns}
      data={state.data}
      icons={tableIcons}
      localization={localization}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}