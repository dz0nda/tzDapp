import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    //minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type RaffleLauchProps = {
  reward: string;  
  description: string;  
  closingDate: Date;
  winningTicketHash: string;
  setReward: (value: string) => void;
  setDescription: (value: string) => void;
  setNewDate: (value: string) => void;
  setwinningTicketHash: (value: string) => void;
  onClick: () => void;
}

const RaffleLaunch: React.FC<RaffleLauchProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardHeader
      title="Launch raffle"
    />
    <Divider variant="middle"/>
    <CardContent>
      <div>
        <TextField id="standard-basic" label="Reward" onChange={(e) => props.setReward(e.target.value)} />
      </div>
      <div>
        <TextField id="standard-basic" label="Description" onChange={(e) => props.setDescription(e.target.value)} />
      </div>
      <div>
        <TextField id="standard-basic" label="Closing Date" onChange={(e) => props.setNewDate(e.target.value)} />
      </div>
      <div>
        <TextField id="standard-basic" label="Winning Ticket Hash" onChange={(e) => props.setwinningTicketHash(e.target.value)} value={props.winningTicketHash} />
      </div>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={props.onClick}>Launch</Button>
    </CardActions>
  </Card>
  );
}

export default RaffleLaunch