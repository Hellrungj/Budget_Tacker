import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, title, amount, deduction, netIncome) {
  return { id, title, amount, deduction, netIncome };
}

const rows = [
  createData(
    0,
    "Whatever Corp.",
    "$2,600.45",
    "$1,240.28",
    "$1,360.17"
  ),
  createData(
    1,
    "Monthly Savings",
    "0",
    "260.04",
    "0"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Overview() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Income & Deductions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Deductions</TableCell>
            <TableCell align="right">Net Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.deduction}</TableCell>
              <TableCell align="right">{row.netIncome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Add New Deduction
        </Link>
      </div>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Add New Income
        </Link>
      </div>
    </React.Fragment>
  );
}
