import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Title from "./Title";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

// Generate Order Data
function createData(id, name, budget, spent, remaining) {
    return {id, name, budget, spent, remaining };
  }

const rows = [
    createData(
      0,
      "Gasoline",
      "$250.00",
      "$30.00",
      "$220.00"
    ),
    createData(
      1,
      "Entertainment",
      "$367.00",
      "$10.00",
      "$357.00"
    ),
  ];

export default function Balance() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Title>Balance</Title>
          <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Spent</TableCell>
              <TableCell>Remaining</TableCell>
              <TableCell align="right">%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>{row.spent}</TableCell>
                <TableCell>{row.remaining}</TableCell>
                <TableCell align="right">
                  <div className={classes.root}>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </React.Fragment>
  );
}
