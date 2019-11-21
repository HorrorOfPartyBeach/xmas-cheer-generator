import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import GenerateButton from './components/GenerateButton';
import {Fab} from '@material-ui/core';
import * as api from './Api';

class App extends Component {
  state = {
    christmasImage: {
      alt: '',
      url: '',
      description: '',
      credit: ''
    }
  };

  render() {

    const images = this.state;
    return (

      <Container maxWidth="xl" className="App">
        
        <Fab id="no-snow-btn" onClick={this.stopSnow} size="small" variant="extended" aria-label="Stop snow animation">
          <span id="no-snow-icon" className="iconify" data-icon="emojione-monotone:snowman-without-snow" data-inline="false"></span>
            Snow
        </Fab>
        
        <header className="app-header">
          <h1 className="app-title">Create Christmas!</h1>
        </header>

          <img id="christmas-image"
            src={images.url}
            alt={images.alt}
          />
          <blockquote>
            <cite>Photo by {images.credit} on <a href="https://unsplash.com/?utm_source=christmas_joy_generator&utm_medium=referral">Unsplash</a></cite>
          <p>{images.description}</p>
          </blockquote>

        <GenerateButton type="button" onClick={this.fetchChristmas}/>
      
      </Container>
    );
  }

  componentDidMount() {
    console.log('Component mounted...')
    this.fetchChristmas();
  };

  fetchChristmas = async () => {
    const christmas = await api.getChristmas();
    console.log(christmas, 'Christmas');
    this.setState({
      url: christmas.urls.regular,
      alt: christmas.alt_description,
      description: christmas.description,
      credit: christmas.user.name
    });
  };

  stopSnow = () => {
    const snow = document.getElementById('snow');
      if (snow.style.display === "none") {
        snow.style.display = "block";
      } else {
        snow.style.display = "none";
      }
  };

}

export default App;