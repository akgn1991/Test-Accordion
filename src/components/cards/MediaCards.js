import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  button: {
    marginLeft: theme.spacing(10),
  },
}));

function ReadMore({ children, maxCharCount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;
  const toggleISTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <Typography
      variant="body2"
      color="textPrimary"
      component="p"
      align="justify"
    >
      {resultString}
      <span onClick={toggleISTruncated} style={{ color: "blue" }} component="p">
        {isTruncated ? "Readmore..." : "Readless"}
      </span>
    </Typography>
  );
}

export default function MediaCards(props) {
  const classes = useStyles();

  const { product,action } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={product.image} title={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <ReadMore>{product.description}</ReadMore>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container direction={"row"} justify={"space-between"}>
          <Grid>
            <Button size="small" color="primary" style={{ fontWeight: "900" }}>
            ₹{product.price}
            </Button>
          </Grid>
          <Grid>
            <Button size="small" color="primary" onClick={()=>action(product)}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
