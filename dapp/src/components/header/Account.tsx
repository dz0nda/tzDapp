import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

type HeaderAccountProps = {
  address: string;
  balance: string;
};

const Account: React.FC<HeaderAccountProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1">
        Address: {props.address}
      </Typography>
      <Typography variant="subtitle1">
        Balance: {props.balance} tez
      </Typography>
    </Box>
  );
}

export default Account