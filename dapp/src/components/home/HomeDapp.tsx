import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    // flexGrow: 1,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  cardActions: {
    flexGrow: 1,
  },
  link: {
    flexGrow: 1,
    textDecoration: 'none'
  }
}));

type HomeDappProps = {
  title: string;
  description: string;
  address: string;
  link: string;
}

const HomeDapp: React.FC<HomeDappProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ align: 'center' }}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography variant="h6" color="textSecondary">
            Description: {props.description}
          </Typography>
        </div>
        <Typography variant="subtitle1" align="center">
          Addess Contract: {props.address}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link className={classes.link} to={`/${props.link}`}>
          <Button fullWidth variant="contained" color="primary">
            Go to DApp
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default HomeDapp