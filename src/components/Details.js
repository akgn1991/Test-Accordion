import {Button,Grid,makeStyles,Paper,TextField} from "@material-ui/core";
import React, { useReducer} from "react";
import Products from "./Products";
import AccodHeader from "./cards/AccodHeader";
import useForm from "./useForm";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(2, 10),
    padding: theme.spacing(1, 1),
  },buttons:{
    marginLeft:theme.spacing(30)
  },button:{
    marginBottom:theme.spacing(5)
  },

    root: {
    "& .MuiFormControl-root": {
      width: "45%",
      padding: theme.spacing(1),
    },
    '& .MuiButtonBase-root':{
      margin:theme.spacing(2.5),
      
    }
  },
}));

export const ShowContext = React.createContext();

const initialState = true;

const reducer = (state, action) => {
  switch (action) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return state;
  }
};

function Details({cart,setCart,setPage,getValue,name}) {
  const [show, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
        temp.firstName = fieldValues.firstName ? "" : "This field is required."
  if ('lastName' in fieldValues)
        temp.lastName = fieldValues.lastName ? "" : "This field is required."
        setErrors({
          ...temp
      })

      if (fieldValues == values)
          return Object.values(temp).every(x => x == "")
  }


  const { values, handleInputChange, handleReset,errors,
    setErrors } = useForm(true, validate);

  

  const handleProceed=()=>{
    (cart.length===0)?
      (window.alert("Please add item to proceed"))
      :
      setPage(false)
  }

  const handleContinue=()=>{
    if(values.firstName.length===0 && name.length===0) return window.alert("please enter Name to continue")
       dispatch("false")
    return getValue(values)
  }

  return (
    <ShowContext.Provider value={{ showState: show, showDispatch: dispatch }}>
      <div>
        <form className={classes.root}>
          <Paper className={classes.pageContent} elevation={10} style={{maxWidth:"800px"}}>
            <AccodHeader title="Personal Details" />
            {show && (
              <Grid >
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  helperText="Mandatory"
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                />
                <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={handleContinue}
                >
                  Continue
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  onClick={handleReset}
                >
                  Clear
                </Button>
                </div>
                </Grid>
            )}
          </Paper>
        </form>

        <Paper className={classes.pageContent} elevation={10} style={{maxWidth:"800px" }}>
          <AccodHeader title="Purchase" />
          {!show && (
            <Grid container spacing={10} direction={"row"} justify={"space-evenly"} >
              <Grid item>
                <Products cart={cart} setCart={setCart}/>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ height: "30px" }}
                  endIcon={<SendIcon/>}
                  onClick={handleProceed}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          )}
        </Paper>
      </div>
    </ShowContext.Provider>
  );
}

export default Details;
