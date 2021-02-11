import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "auto",
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),

  },
  cards: {
    // marginRight: theme.spacing(2),
    // maxWidth: 520,
  },
  cardheader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderImage: {
    width: "100px",
    height: "120px",
    objectFit: "contain",
  },
  title: {
    textAlign: "left",
    color: "#f12f4b",
    fontWeight: 600,
  },
  content: {
    display: "flex",
  },
  cardContent:{
    textAlign: "left",
    margin: theme.spacing(2),
  }
}));

function SearchProducts({imageUrl, title, tag, address, cusines, cost}) {
  const classes = useStyles();

  return (
    <div style={{textAlign: "-webkit-center"}}>
      <div className={classes.cards}>
          <Card className={classes.card}>
            <div className={classes.content}>
              <div className="img">
                <img className={classes.orderImage} src={imageUrl} alt="" />
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h4" >{title} </Typography>
                <Typography variant="h6" >{tag}</Typography>
                <Typography variant="body1" >{address}</Typography>
              </div>
            </div>
            <Divider />
            <div style={{display: "flex", paddingTop: "20px", paddingLeft: "20px"}}>
                <Typography variant="h6" style={{marginRight: "20px"}} >CUSINES :</Typography>
                <Typography variant="h6" >{cusines}</Typography>
            </div>
            <div style={{display: "flex", marginLeft: "20px"}}>
                <Typography variant="h6" style={{marginRight: "20px"}} >COST FOR TWO :</Typography>
                <Typography variant="h6" >{cost}/-</Typography>
            </div>
          </Card>
        </div>
    </div>
  );
}

export default SearchProducts;
