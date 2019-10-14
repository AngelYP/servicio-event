import React from 'react';
import MaterialTable from 'material-table';
import { columns, data, tableIcons, localization, insertGuest, updateGuest, deleteGuest } from '../../../services/guests'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Nombre', field: 'name' },
        { title: '¿Está acompañado?', field: 'accompanied', lookup:{true:'Sí', false:'No'}, },
        { title: 'Nombre de acompañante', field: 'accompanist' },
        { title: 'Email', field: 'email' },
        { title: 'Hotel', field: 'hotel' },
        { title: 'Factura', field: 'invoice' },
        { title: 'Autobús', field: 'bus' },
        { title: 'Asistencia', field: 'attended', lookup:{true:'Sí', false:'No'}, }
      ],
      data: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    data().then(({ guests }) => {
      console.log('CategoryListSidebar', guests);
      this.setState({ data: guests })
      console.log('CategoryListSidebar', guests);
    })
  }

  async setNewRow(newData){
    insertGuest(newData);
    console.log('Simón');
  }
  async updateRow(updatedRow){
    updateGuest(updatedRow);
    console.log('También');
  }
  async deleteRow(deletedRow){
    deleteGuest(deletedRow);
    console.log('Chingón');
  }

  render() {
    return (
      <MaterialTable
        title="Invitados"
        columns={this.state.columns}
        data={this.state.data}
        icons={tableIcons}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                  this.setNewRow(newData);
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                  this.updateRow(newData);
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                  this.deleteRow(oldData);
                }
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
}

export default Table;