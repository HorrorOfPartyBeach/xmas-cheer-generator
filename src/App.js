import React, { Component } from 'react';
import {Button, Container} from '@material-ui/core';

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?Christmas',
  alt: 'random unsplash image'
};

class App extends Component {
  render() {
    return (

      <Container maxWidth="xl" className="App">
        
        <header className="App-header">
          <h1 className="App-title">Get Some Christmas Cheer!</h1>
        </header>

        <img id="christmas-image"
          src = {unsplashimg.src}
          alt = {unsplashimg.alt} 
        />

        <Button variant="contained" color="primary">
          Sprinkle Christmas Magic!
        </Button>
      
      </Container>
    );
  }
}

export default App;