import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../../DesktopComponent';
import Master from '../Master/Master.windows';
import Details from '../Details/Details.windows';

const styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

@DesktopComponent
class Item extends Component {
  static Master = Master;
  static Details = Details;

  static propTypes = {
    selected: PropTypes.bool
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      selected: props.selected ? props.selected : false
    };
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Item;
