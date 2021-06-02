import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import React from "react";
import { useStyle } from ".";

function Header({cart,setPage,setCart,name,setName}) {
  const classes = useStyle();

  const handleLogout=()=>{
    setCart([])
    setName("")
  }


  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar>
        <Grid container alignItems="center">
        <Typography onClick={()=>setPage(true)} style={{cursor:"pointer"}}>Accordion Cart </Typography>
          <Grid item sm>
          <Typography style={{marginLeft:"900px"}} >{name}</Typography>
          </Grid>
          <Grid item >
            <IconButton>
              <Badge  color="secondary">
                <PeopleOutlineSharpIcon fontSize="small" onClick={()=>setPage(true)}/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={cart.length} color="secondary">
                <AddShoppingCartSharpIcon fontSize="small" onClick={()=>setPage(false)}/>
              </Badge>
            </IconButton>
            <IconButton>
              <ExitToAppTwoToneIcon fontSize="small" onClick={handleLogout} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
