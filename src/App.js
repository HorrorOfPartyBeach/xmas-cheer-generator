import React, { Component } from 'react';
import {Container, Fab} from '@material-ui/core';

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?Christmas',
  alt: 'random unsplash image'
};

class App extends Component {
  render() {
    return (

      <Container maxWidth="xl" className="App">
        
        <header className="app-header">
          <h1 className="app-title">Create Christmas!</h1>
        </header>

        <img id="christmas-image"
          src = {unsplashimg.src}
          alt = {unsplashimg.alt} 
        />

        <Fab id="making-christmas" variant="extended" aria-label="Generate random Christmas image">
          <span className="iconify" data-icon="mdi-snowflake" data-inline="false"></span>
            Sprinkle Christmas Cheer!
          <span className="iconify" data-icon="mdi-snowflake" data-inline="false"></span>
        </Fab>
      
      </Container>
    );
  }
}

export default App;