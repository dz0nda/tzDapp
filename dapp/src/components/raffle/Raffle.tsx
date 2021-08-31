import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core'; 
import RaffleInfoContainer from '../../containers/raffle/RaffleInfoContainer';
import RaffleLaunchContainer from '../../containers/raffle/RaffleLaunchContainer';

const useStyles = makeStyles({
  raffleRoot: {
    flexGrow: 1,
    height: '75vh'
  },
  raffleGrid: {
    height: '100%',
  },
});

const Raffle: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.raffleRoot}>
      <Grid  className={classes.raffleGrid} container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={4}>
          <RaffleInfoContainer />
        </Grid>
        <Grid item xs={4}>
            <RaffleLaunchContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Raffle