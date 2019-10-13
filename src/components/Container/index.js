import React from 'react';
import Table from './Table';
import Reader from './Reader';
import { makeStyles } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
    }
}));

const selectContent = (menuItem) => {
    switch (menuItem) {
        case 'table':
            return <Table />
        case 'reader':
            return <Reader/>
        default:
            return <Reader />
    }
}

const Container = () => {
    const classes = useStyles();
    return <Grid container direction="row" alignItems={'center'} justify={'center'} className={classes.root}>
        {selectContent('table')}
    </Grid>
}

export default Container;