import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';

import ConnectButtonContainer from '../../containers/header/ConnectButtonContainer';
import AccountContainer from '../../containers/header/AccountContainer';

const useStyles = makeStyles((theme) => ({
  headerRoot: {
    flexGrow: 1,
    height: '10vh',
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home">
            <Home />
          </IconButton>
          <AccountContainer />
          <ConnectButtonContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header