import React, { Component } from 'react';
import { Window, TitleBar, View, Form, Label, TextInput, Checkbox, Button } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <Window
        color="#cc7f29"
        theme="dark"
        chrome
        style={{ width: '465px', height: 'auto' }}
      >
        <TitleBar title="My Windows Application" controls/>
        
        <View className="view" padding="20px">
          <Form onSubmit={() => { alert('form submitted'); }}>
            <Label color="red" align="center">
              There was an error submitting this form.
            </Label>

            <Form.Row>
              <TextInput header="Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
            </Form.Row>

            <Form.Row>
              <TextInput header="Longer Label" defaultValue="" placeholder="TextField" style={{ width: '400px' }}/>
            </Form.Row>

            <Form.Row>
              <Checkbox label="Default checked" defaultChecked/>
            </Form.Row>

            <Form.Row>
              <Button onPress="submit" color push>Button With Color</Button>
              <Button push>Button</Button>
            </Form.Row>
          </Form>
        </View>
      </Window>
    );
  }
}
