import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white",
    },
  },
};

const MiniPalette = (props) => {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1> Mini Palette Component</h1>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
