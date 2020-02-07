import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="primary">Home</Button>
      <Button color="secondary">Accounts</Button>
      <Button disabled>My Accounts</Button>
      <Button color="secondary">Logout</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
    </div>
  );
}