import React, { Component } from 'react';
import { SegmentedControl, Box, Window, TitleBar, Toolbar, Form, Label, Button, TextInput } from 'react-desktop/osx';

export default class extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'login'};
  }

  render() {
    return (
      <Window
        chrome
        style={{width: '465px', height: '305px'}}
      >
        <TitleBar title="TitleBar with Toolbar" controls>
          <Toolbar/>
        </TitleBar>
        
        <Box className="box">
          <SegmentedControl>
            <SegmentedControl.Item
              title="Selected"
              selected={this.state.selectedTab === 'login'}
              onPress={() => { this.setState({ selectedTab: 'login' }) }}
              className="form"
            >
              <Form onSubmit={() => { alert('form submitted'); }}>
                <Label color="red" align="center">
                  There was an error submitting this form.
                </Label>

                <Form.Row>
                  <Label>Label:</Label>
                  <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <Label>Longer label:</Label>
                  <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <Button onPress="submit" push color="blue">Button With Color</Button>
                  <Button push>Button</Button>
                </Form.Row>
              </Form>
            </SegmentedControl.Item>
    
            <SegmentedControl.Item
              title="Segmented"
              selected={this.state.selectedTab === 'segmented'}
              onPress={() => { this.setState({ selectedTab: 'segmented' }) }}
            >
              Hello2
            </SegmentedControl.Item>
    
            <SegmentedControl.Item
              title="Control"
              selected={this.state.selectedTab === 'control'}
              onPress={() => { this.setState({ selectedTab: 'control' }) }}
            >
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </Window>
    )
  }
}