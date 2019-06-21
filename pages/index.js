import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('button clicked');
};

const Home = () => (
  <div>
    <Button variant="contained" onClick={handleClick}>
      Home
    </Button>
  </div>
);


export default Home;
