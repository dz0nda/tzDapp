import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HomeDapp from './HomeDapp';

const useStyles = makeStyles({
  homeRoot: {
    flex: 1,
    height: '75vh'
  },
  homeGrid: {
    height: '100%',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.homeRoot}>
      <Grid className={classes.homeGrid} container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={3}>
          <HomeDapp
            title="Raffle"
            description=""
            address=""
            link="raffle"
          />
        </Grid>
        <Grid item xs={3}>
          <HomeDapp
            title="Counter"
            description=""
            address=""
            link="counter"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home