import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import GenerateButton from './components/GenerateButton';
//import * as config from './config';
import * as api from './Api';

// const unsplashimg = {
//   src: 'https://source.unsplash.com/1600x900/?Christmas',
//   alt: 'Random Christmas image'
// };

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
    console.log(images, 'state');
    return (

      <Container maxWidth="xl" className="App">
        
        <header className="app-header">
          <h1 className="app-title">Create Christmas!</h1>
        </header>

          <img id="christmas-image"
            src={images.url}
            alt={images.alt}
          />
          <blockquote>
          <cite>Credit: {images.credit}</cite>
          <p>{images.description}</p>
          </blockquote>

        <GenerateButton type="button" onClick={this.fetchChristmas}/>
      
      </Container>
    );
  }

  componentDidMount() {
    //const ACCESS_KEY = config.ACCESS_KEY;
    console.log('Component mounted...')
    this.fetchChristmas();
  }
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

}

export default App;