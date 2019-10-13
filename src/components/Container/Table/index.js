import React from 'react';
import MaterialTable from 'material-table';
import { columns, data, tableIcons, localization } from '../../../services/guests'

class Assistants extends React.Component {
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
    getGuests().then(({ guests }) => {
      console.log('CategoryListSidebar', guests);
      this.setState({ rows: guests })
      console.log('CategoryListSidebar', guests);
    })
  }
}
