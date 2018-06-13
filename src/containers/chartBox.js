import React, { Component } from 'react';
import ChartList from '../components/chartList.js';
import Song from '../components/Song.js';



class ChartBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    };

  }


  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songsData => this.setState({songs: songsData.feed.entry}))
    .catch(error => console.log("Error:", error))
  }


  render(){
    return (
      <div>
        <h1>UK Top 20</h1>
        <ChartList
          songs={this.state.songs}
        />
      </div>
    );
  };

}

export default ChartBox;
