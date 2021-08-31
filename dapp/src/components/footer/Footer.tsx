import React from 'react';

import { Container, Typography, Box, Link } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    height: '10vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    return (
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={1}>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="#">
              {'dzonda'}
            </Link>{''}
            {bull}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
  );
}

export default Footer