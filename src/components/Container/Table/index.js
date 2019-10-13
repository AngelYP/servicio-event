import React from 'react';
import MaterialTable from 'material-table';
import { columns, data, tableIcons, localization } from '../../../services/guests'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'uuid', field: 'uuid' },
        { title: 'name', field: 'name' },
        { title: 'accompanied', field: 'accompanied' },
        { title: 'accompanist', field: 'accompanist' },
        { title: 'email', field: 'email' },
        { title: 'hotel', field: 'hotel' },
        { title: 'invoice', field: 'invoice' },
        { title: 'bus', field: 'bus' },
        { title: 'attended', field: 'attended' }
      ],
      rows: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    data().then(({ guests }) => {
      console.log('CategoryListSidebar', guests);
      this.setState({ rows: guests })
      console.log('CategoryListSidebar', guests);
    })
  }

  render() {
    return (
      <MaterialTable
        title="Editable Preview"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
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