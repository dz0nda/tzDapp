import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { RaffleStorage } from '../../types/Raffle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type RaffleInfoProps = {
  storage: RaffleStorage | undefined;
  tickets: string[];
  buyTicket: () => void;
};

const RaffleInfo: React.FC<RaffleInfoProps> = (props) => {
  const { storage, tickets } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Current raffle"
      />
      <Divider variant="middle"/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Administrator: {storage ? storage.admin.toString() : ""}
        </Typography>
        <Typography variant="h5" component="h2">
          Reward: {storage ? storage.jackpot.toString() : ""}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description: {storage ? storage.description.toString() : ""}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Closing date: {storage ? storage.close_date.toString() : ""}
          </Typography>
        <Typography variant="body2" component="p">
          Players:
          <div>
            {storage ? storage.players.map((value, index) => {
              return <li  key={index}>{value}</li>
            }) : ""}
          </div>
        </Typography>
        <Typography variant="body2" component="p">
          Ticket Sold:
          <div>
            {tickets.map((value, index) => {
              return <li key={index}>{value[0]} : {value[1]}</li>
            })}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.buyTicket}>Buy Ticket</Button>
      </CardActions>
    </Card>
  );
}

export default RaffleInfo