import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar:{
    boxShadow: "none",
    backgroundColor: "#45b8ba" 
  },
  logo:{
      width:'200px',
      margin:'5px',
      alignSelf:'right'

  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Grid container justify="flex-end" alignItems="center">
              <img src="./logo.png" alt="logo" className={classes.logo}/>
             </Grid>

          </IconButton>
          
          <Typography variant="h6" color="inherit">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}