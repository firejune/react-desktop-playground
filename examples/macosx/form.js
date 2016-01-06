import React, { Component } from 'react';
import { Window, TitleBar, Box, Form, Label, TextInput, Button } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Window
        color="#cc7f29"
        theme="dark"
        chrome
        style={{ width: '465px', height: 'auto' }}
      >
        <TitleBar title="My Mac Application" controls/>
        
        <Box className="box">
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
        </Box>
      </Window>
    );
  }
}