import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from './components/Particles/Particles';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const initialState = {
  input: 'https://cvijansportfolio.netlify.app/profile.6d231008.png',
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '0',
        joined: ''
      }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: 'https://cvijansportfolio.netlify.app/profile.6d231008.png',
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '0',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
   
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onHereSubmit = () => {
    this.setState({imageUrl: 'https://cvijansportfolio.netlify.app/profile.6d231008.png'});
    this.setState({input: 'https://cvijansportfolio.netlify.app/profile.6d231008.png'});
    fetch('https://smartbrain-api-i5zr.onrender.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    }).then(response => response.json())
       .then(response => {
        if (response) {
          fetch('https://smartbrain-api-i5zr.onrender.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
       .catch(err => console.log(err));
      }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://smartbrain-api-i5zr.onrender.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    }).then(response => response.json())
       .then(response => {
        if (response) {
          fetch('https://smartbrain-api-i5zr.onrender.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
       .catch(err => console.log(err));
      }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
  return (
    <div className="App">
      <Particles className='particles' id="tsparticles" />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { route === 'home' 
       ? <div>
       <Logo/>
       
       <Rank name = {this.state.user.name}
       entries = {this.state.user.entries} />
       <ImageLinkForm 
           onInputChange={this.onInputChange}
           onButtonSubmit={this.onButtonSubmit}
           onHereSubmit={this.onHereSubmit}/>
       <FaceRecognition box={box} imageUrl={imageUrl}/>
    </div> 
       :(
        route === 'signin'
       ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
       : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
      }
      </div>
  );
}
}

export default App;
