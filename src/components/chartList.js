import React, { Component } from 'react';
import Song from './Song.js';

const ChartList = (props) => {

  const songNodes = props.songs.map((song, index) => {
    return (
      <li key={index}>
        <Song song={song} key={index}/>
      </li>
    );
  });


  return (
    <div>
      <ol>
        {songNodes}
      </ol>
    </div>
  );
};

export default ChartList;
