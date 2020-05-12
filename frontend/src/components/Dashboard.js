import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";
import Overview from "./Overview";
import Budgeting from "./Budgeting";
import Expenses from "./Expenses";
import Balance from "./Balance";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        {/* Chart */}
        {/* <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid> */}

        {/* Recent Deposits */}
        {/* <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid> */}

        {/* Overview */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Overview />
          </Paper>
        </Grid>
      
        {/* Budgeting */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Budgeting />
          </Paper>
        </Grid>

        {/* Recent Orders */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid> */}

        {/* Expenses */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Expenses />
          </Paper>
        </Grid>

        {/* Balance */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Balance />
          </Paper>
        </Grid>

      </Grid>
    </Fragment>
  )
}

