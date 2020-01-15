import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AuctionItem from './AuctionItem'

export default function BidTest() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <AuctionItem />
      </Container>
    </React.Fragment>
  );
}