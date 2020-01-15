import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BidTest from './BidTest'
import { Route, Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/test.jpg"
          title="Mariposa Hotel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            3 Nights for 2 in Mauritius
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bid on 3 Nights for 2 at the Mariposa Hotel in Mauritius, transport and meals included!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/BidTest">
          <Button size="Large" variant="contained" className="Primary">
            BID NOW
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}