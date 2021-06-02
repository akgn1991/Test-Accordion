import {  makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React from 'react';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
  },
});


export default function Cart({ cart, setCart }) {

  const classes = useStyles();

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.title === product.title
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ?<div>Cart is Emplty....</div> :(
        <div>
        <button onClick={clearCart}>Clear Cart</button>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Quantity&nbsp;(Nos.)</StyledTableCell>
            <StyledTableCell align="center">price&nbsp;(Rs.)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center"><input style={{width:"30px"}} value={row.quantity} onChange={(e) =>setQuantity(row,parseInt(e.target.value))}/></StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <p style={{marginLeft:"1150px", fontWeight:"900"}}>Total&emsp;₹{getTotalSum()}</p>
    </TableContainer>
    </div>
    )}
       </>
  );
}
