import React from 'react';
import './App.css';
import Container from './components/Container'
import Header from './components/Header'
import { Grid } from '@material-ui/core';

function App() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
    );
}

export default App;
