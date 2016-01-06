import React, { Component } from 'react';
import { Window, TitleBar, View, ProgressCircle, SplitView, MasterDetailsView, Form, TextBlock, TextBox, Checkbox, Button } from 'react-desktop/windows';
import * as Icons from '../../src/_windows/assets/icons';

export default class extends Component {
  render() {
    return (
      <Window
        ref="window"
        color={this.props.color}
        chrome
        theme={this.props.theme}
        storage={localStorage}
        style={{ width: '800px', height: '480px' }}
      >
        <TitleBar title="My Windows Application" controls/>

        <SplitView isOpen openLength={200} push persistIsOpen persistSelectedItem>
          <SplitView.Item
            title="Welcome"
            icon={Icons.home}
            theme="light"
            background="#ffffff"
            style={{
              backgroundImage: 'url(./assets/picture.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center'
            }}
          >
            <h1
              style={{
                position: 'absolute',
                top: '25%',
                left: '0',
                width: '100%',
                textAlign: 'center',
                lineHeight: '28px',
                fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
                fontSize: '45px',
                fontWeight: '100',
                color: '#333'
              }}
            >
              Welcome to React Desktop
            </h1>
          </SplitView.Item>

          <SplitView.Item
            title="Progress"
            icon={Icons.progress}
            padding="40px 30px"
            theme="light"
            background="#ffffff"
          >
            <View horizontalAlignment="center" verticalAlignment="center">
              <ProgressCircle size={60} color/>
            </View>
          </SplitView.Item>

        </SplitView>
      </Window>
    );
  }
}
