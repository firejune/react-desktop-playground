import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import examples from 'examples';
import Sidebar from './ui/sidebar/sidebar';

//import {Window1 as Window1OSX, Window2 as Window2OSX} from './example.osx'
//import {Window1 as Window1Win, Window2 as Window2Win} from './example.win'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    width: '200px'
  },
  example: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1000px',
    margin: '0 auto'
  }
};

class Playground extends Component {
  static childContextTypes = {
    playground: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      os: null,
      theme: null,
      color: null,
      example: null
    };
    this.loadState(false);
  }

  loadState(mounted = true) {
    try {
      const state = JSON.parse(localStorage['playground']);
      if (mounted) this.setState(state);
      else this.state = state;
    } catch (err) {}
  }

  persistState() {
    localStorage['playground'] = JSON.stringify(this.state);
  }

  getChildContext() {
    return {
      playground: this
    };
  }

  componentDidMount() {
    //this.renderWindows();
  }

  componentDidUpdate() {
    this.persistState();
    //this.renderWindows();
  }

  handleChangeTheme(theme) {
    console.log('handleChangeTheme', theme)
    /*
    if (this.window2.refs.window) {
      this.window2.refs.window.setState({
        requestedTheme: theme
      });
    }
    */
  }

  handleChangeColor(color) {
    console.log('handleChangeColor')
    /*
    this.window2.refs.window.setState({
      color: color
    });
    */
  }

  handleChangePlatform(platform) {
    console.log('handleChangePlatform')   
    this.setState({ os: platform }); 
  }

  showExample = (example) => {
    this.setState({ example: example });
  };

  render() {
    let example;
    if (this.state.example) {
      const Example = examples['/examples/' + this.state.example];
      example = <Example/>;
    }

    return (
      <div style={styles.container}>
        <Sidebar
          style={styles.sidebar}
          onChangeColor={this.handleChangeColor.bind(this)}
          onChangeTheme={this.handleChangeTheme.bind(this)}
          onChangePlatform={this.handleChangePlatform.bind(this)} />
        <div style={styles.example}>
          {example}
        </div>
      </div>
    );
  }
}

export default Playground;
