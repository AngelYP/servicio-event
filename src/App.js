import React from 'react';
import './App.css';
import Table from './components/Table'
import Header from './components/Header'
import { Grid } from '@material-ui/core';

function App() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
                <Table/>
            </Grid>
        </Grid>
    );
}

export default App;
