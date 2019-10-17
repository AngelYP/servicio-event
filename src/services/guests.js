import React from 'react';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const columns = [
    { title: 'uuid', field: 'uuid' },
    { title: 'name', field: 'name' },
    { title: 'accompanied', field: 'accompanied' },
    { title: 'accompanist', field: 'accompanist' },
    { title: 'email', field: 'email' },
    { title: 'hotel', field: 'hotel' },
    { title: 'invoice', field: 'invoice' },
    { title: 'bus', field: 'bus', type: "number"},
    { title: 'attended', field: 'attended' }
];

export const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


export const localization = {
    pagination: {
        labelDisplayedRows: '{from}-{to} of {count}',
        labelRowsSelect: "registros",
        labelRowsPerPage: "Registros por página",
        firstAriaLabel: "Primera página",
        firstTooltip: "Primera página",
        previousAriaLabel: "Página anterior",
        previousTooltip: "Página anterior",
        nextAriaLabel: "Siguiente página",
        nextTooltip: "Siguiente página",
        lastAriaLabel: "Última página",
        lastTooltip: "Última página"
    },
    toolbar: {
        nRowsSelected: '{0} row(s) selected',
        searchTooltip: "Buscar",
        searchPlaceholder: "Buscar",
        
        

    },
    header: {
        actions: 'Acciones'
    },
    body: {
        emptyDataSourceMessage: 'No records to display',
        filterRow: {
            filterTooltip: 'Filter'
        },
        editRow: {
            deleteText: "¿Está seguro que desea eliminar este registro?",
            cancelTooltip: "Cancelar",
            saveTooltip: "Guardar"
        },
        addTooltip: "Agregar",
        deleteTooltip: "Borrar",
        editTooltip: "Editar"
    }
}

export const data = async function () {
    try {
        const response = await fetch(`http://localhost:4000/api/guests`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const insertGuest = async function (data) {
    try {
        const response = await fetch(`http://localhost:4000/api/guest/create/`+(data.name || null)+`/`+true+`/`+(data.accompanist || null)+`/`+(data.email || null)+`/`+(data.hotel || null)+`/`+(data.invoice || null)+`/`+(data.attended || null)+`/`+(data.bus || null));
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const updateGuest = async function (data) {
    try {
        const url=`http://localhost:4000/api/guest/update/`+(data.uuid || null)+`/`+(data.name || null)+`/`+true+`/`+(data.accompanist || null)+`/`+(data.email || null)+`/`+(data.hotel || null)+`/`+(data.invoice || null)+`/`+(data.attended || null)+`/`+(data.bus || null);
        console.log(url);
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const deleteGuest = async function (data) {
    try {
        const response = await fetch(`http://localhost:4000/api/guest/delete/`+data.uuid);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
        return null
    }
}