import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Window
        color="#cc7f29"
        theme="dark"
        chrome
        style={{ width: '800px', height: '480px' }}
      >
        <TitleBar title="My Mac Application" controls/>
      </Window>
    );
  }
}