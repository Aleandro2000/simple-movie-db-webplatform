import React from "react";
import { CircularProgress, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  spinner: {
    color: theme.palette.primary.main,
  },
}));

export default function LoadingSpinnerTemplate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} size={80} />
    </div>
  );
};