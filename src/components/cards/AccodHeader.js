import React, { useState,useContext } from 'react'
import { Typography, makeStyles, Icon, Grid } from '@material-ui/core'
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import { ShowContext } from '../Details';




const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
    },
       pageHeader:{
        padding:theme.spacing(1),
        display:'flex',
        marginBottom:theme.spacing(1)
    },
    pageIcon:{
        display:'inline-block',
        marginRight:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(2),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function AccodHeader(props) {

    const[show,setShow] = useState(true)

    const showContext = useContext(ShowContext)

    const handleDisplay=()=>{
        showContext.showDispatch(`${show}`)
        setShow(!show)
        console.log(show)
    }
    const classes = useStyles();
    const { title} = props;
    return (
            <Grid container className={classes.pageHeader} direction={"row"} justify={"space-between"}>
                <Grid item className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                </Grid>
                <Grid>
                <Icon className={classes.pageIcon} onClick = {handleDisplay} >
                
                    <KeyboardCapslockIcon style={{cursor:"pointer"}}  />
                </Icon>
                </Grid>
            </Grid>
    )
}
