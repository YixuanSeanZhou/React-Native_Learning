/**
* the albumList is going to make an http request to the
* API online so that the data of the albums is goingt be
* stored in this. Then it pass the the data into the albums
* spcific component to dsiplay
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component {
  // Component state update the change we made after render the componenet onto the app
  state = { albums: [] };

  // lifecycle
  componentWillMount() {
    // Because this is defined in the same name, it will be
    // excuted asa it render to the screen
      axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
      // Always use setState to modify state
  }

  //helper for mapping a list
  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} album={album} />);
    // array helper
  }

  // need a rander method to return jss
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

// Make a http request
// All we made yet is fuctional components --> A function
// that return a component

// Class Based Componenet

// First question: When to fetch?
// Answer: ASA the app run
// Class has lifecycle method

export default AlbumList;
