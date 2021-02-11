import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 235,
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    cursor: "pointer"
  },
  cards: {
    marginRight: theme.spacing(2),
    maxWidth: 420,
    display: "inline-flex",
  },
  orderImage: {
    height: "150px",
    width: "200px",
    objectFit: "contain",
  },
  content: {
    display: "flex",
    placeItems:"center"
  },
  cardContent:{
    textAlign: "left",
    margin: theme.spacing(2),
  }
}));

function ReusableCard({title,imageUrl,desc}) {
  const classes = useStyles();
  const history = useHistory();

  return (
      <div className={classes.cards}>
          <Card className={classes.card} onClick={() => history.push("/search")}>
            <div className={classes.content}>
              <div className="img">
                <img className={classes.orderImage} src={imageUrl} alt="" />
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h6" color="textPrimary">{title} </Typography>
                <Typography variant="body1" color="textPrimary" >{desc} </Typography>
              </div>
            </div>
          </Card>
      </div>
  );
}

export default ReusableCard;
