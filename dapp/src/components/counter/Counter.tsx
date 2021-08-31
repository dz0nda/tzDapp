import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core'; 
import RaffleInfoContainer from '../../containers/raffle/RaffleInfoContainer';
import RaffleLaunchContainer from '../../containers/raffle/RaffleLaunchContainer';

import CounterInfoContainer from '../../containers/counter/CounterInfoContainer';

const useStyles = makeStyles({
  raffleRoot: {
    flexGrow: 1,
    height: '75vh'
  },
  raffleGrid: {
    height: '100%',
  },
});

const Counter: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.raffleRoot}>
      <Grid  className={classes.raffleGrid} container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={4}>
          <CounterInfoContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Counter