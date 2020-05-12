import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
      },
    seeMore: {
      marginTop: theme.spacing(3)
    }
  }));

// Generate Order Data
function createData(id, name, amount) {
    return {id, name, amount };
  }

const rows = [
    createData(
      0,
      "Gasoline",
      312.44
    ),
    createData(
      1,
      "Entertainment",
      866.99
    ),
  ];

function valuetext(value) {
  return `${value}°C`;
}

function preventDefault(event) {
    event.preventDefault();
  }

export default function Budgeting() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <Title>Budgeting</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>

                <div className={classes.root}>
                    <Slider
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={100}
                    />
                </div>

              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Add New Category
        </Link>
      </div>
    </React.Fragment>
  );
}
