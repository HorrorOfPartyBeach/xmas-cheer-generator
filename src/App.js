import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import GenerateButton from './components/GenerateButton';
import * as config from './config';

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?Christmas',
  alt: 'Random Christmas image'
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

        <GenerateButton/>
      
      </Container>
    );
  }

  componentDidMount() {
    const ACCESS_KEY = config.ACCESS_KEY;
    console.log(ACCESS_KEY, 'Component mounted...')
  }

}

export default App;