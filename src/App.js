import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import { Grid } from '@material-ui/core';

function App() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Table/>
            </Grid>
        </Grid>
    );
}

export default App;
