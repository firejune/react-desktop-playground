'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _DesktopComponent = require('../DesktopComponent');

var _DesktopComponent2 = _interopRequireDefault(_DesktopComponent);

var _Animation = require('./Animation');

var styles = {
  progress: {
    width: '20px',
    height: '20px',
    position: 'relative'
  },

  container: {
    position: 'relative',
    height: '20px'
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};

var ProgressRingWindows = (function (_Component) {
  _inherits(ProgressRingWindows, _Component);

  function ProgressRingWindows() {
    _classCallCheck(this, _ProgressRingWindows);

    _get(Object.getPrototypeOf(_ProgressRingWindows.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProgressRingWindows, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _Animation.startAnimation)(this.refs[0], this.refs[1], this.refs[2], this.refs[3], this.refs[4], this.refs[5]);

      if ((0, _reactDom.findDOMNode)(this).previousSibling) {
        this.applySiblingStyle();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'applySiblingStyle',
    value: function applySiblingStyle() {
      if (!this.refs.element.style.marginLeft) {
        this.refs.element.style.marginLeft = '12px';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var size = _props.size;
      var color = _props.color;
      var style = _props.style;
      var absolute = _props.absolute;

      var props = _objectWithoutProperties(_props, ['size', 'color', 'style', 'absolute']);

      var containerStyle = _extends({}, styles.container);
      var componentStyle = _extends({}, styles.progress, style, {
        visibility: this.state.visible ? 'visible' : 'hidden',
        display: this.state.display ? 'block' : 'none'
      });

      if (absolute) {
        componentStyle = _extends({}, componentStyle, styles.absolute);
      }

      var componentColor = '#1883d7';
      switch (color) {
        case true:
          componentColor = this.state.color;
          break;
        case 'blue':
          componentColor = '#1883d7';
          break;
        default:
          if (color) {
            componentColor = color;
          }
          break;
      }

      if (size) {
        componentStyle = _extends({}, componentStyle, {
          width: size + 'px',
          height: size + 'px'
        });
        containerStyle = _extends({}, containerStyle, {
          height: size + 'px'
        });
      }

      var svg = _react2['default'].createElement(
        'svg',
        _extends({
          id: 'field',
          ref: 'element',
          x: '0px',
          y: '0px',
          viewBox: '0 0 150 150',
          style: componentStyle
        }, props),
        _react2['default'].createElement('circle', { ref: '0', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2['default'].createElement('circle', { ref: '1', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2['default'].createElement('circle', { ref: '2', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2['default'].createElement('circle', { ref: '3', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2['default'].createElement('circle', { ref: '4', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2['default'].createElement('circle', { ref: '5', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' })
      );

      var content = svg;
      if (absolute) {
        content = _react2['default'].createElement(
          'div',
          { style: containerStyle },
          svg
        );
      }

      return content;
    }
  }], [{
    key: 'propTypes',
    value: {
      absolute: _react.PropTypes.bool,
      color: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
      size: _react.PropTypes.number
    },
    enumerable: true
  }]);

  var _ProgressRingWindows = ProgressRingWindows;
  ProgressRingWindows = (0, _DesktopComponent2['default'])(ProgressRingWindows) || ProgressRingWindows;
  return ProgressRingWindows;
})(_react.Component);

exports['default'] = ProgressRingWindows;
module.exports = exports['default'];