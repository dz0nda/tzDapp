import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  counterInfoRoot: {
    flexGrow: 1,
  },
  countInfoGrid: {
    padding: theme.spacing(3)
  },
}));

type CounterInfoProps = {
  storage: string | undefined;
  addValue: (value: number) => void;
  subValue: (value: number) => void;
  resetValue: () => void;
}

const CounterInfo: React.FC<CounterInfoProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  return (
    <Card className={classes.counterInfoRoot}>
      <CardHeader
        title="Counter"
        titleTypographyProps={{ align: 'center' }}
      />
      <Divider variant="middle" />
      <CardContent>
        <Grid className={classes.countInfoGrid} container justifyContent="space-evenly" alignItems="center">
          <TextField
            fullWidth
            label="Enter a value to add or sub"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Grid>
        <Grid className={classes.countInfoGrid} container justifyContent="space-evenly" alignItems="center">
          <Grid item>
            <IconButton color="primary" onClick={() => props.subValue(parseInt(value))}>
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {props.storage}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={() => props.addValue(parseInt(value))}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid className={classes.countInfoGrid} container justifyContent="space-evenly" alignItems="center">
          <Button color="primary" variant="contained" onClick={() => props.resetValue()}>Reset</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CounterInfo