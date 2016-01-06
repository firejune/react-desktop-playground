import React, { Component, PropTypes } from 'react';
import { MasterDetailsView, Text, Window, TitleBar } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <Window
        color="#cc7f29"
        theme="dark"
        chrome
        style={{ width: '740px', height: '480px' }}
      >
        <TitleBar title="My Windows Application" controls/>
        <MasterDetailsView theme="light">
          {this.renderItem('Item 1', 'Content 1')}
          {this.renderItem('Item 2', 'Content 2')}
          {this.renderItem('Item 3', 'Content 3')}
        </MasterDetailsView>
      </Window>
    );
  }

  renderItem(master, details) {
    return (
      <MasterDetailsView.Item>
        <MasterDetailsView.Item.Master width="200" push>
          {master}
        </MasterDetailsView.Item.Master>
        <MasterDetailsView.Item.Details background>
          <Text padding="20" color="white">{details}</Text>
        </MasterDetailsView.Item.Details>
      </MasterDetailsView.Item>
    );
  }
}
