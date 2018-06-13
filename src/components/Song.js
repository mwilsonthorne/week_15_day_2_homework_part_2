import React, { Component } from 'react';

const Song = (props) => {
  return (
    <div>
      <h3>{props.song['im:name'].label}</h3>
      <h3>Artist: {props.song['im:artist'].label}</h3>
    </div>

  )
}

export default Song;
