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

var _Styling = require('../Styling');

var styles = {
  progress: {
    width: '16px',
    height: '16px'
  },

  container: {
    position: 'relative',
    height: '16px'
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};

var IndeterminateCircularProgressIndicatorOSX = (function (_Component) {
  _inherits(IndeterminateCircularProgressIndicatorOSX, _Component);

  _createClass(IndeterminateCircularProgressIndicatorOSX, null, [{
    key: 'propTypes',
    value: {
      style: _react.PropTypes.object,
      form: _react.PropTypes.any,
      absolute: _react.PropTypes.bool,
      visible: _react.PropTypes.bool,
      display: _react.PropTypes.bool,
      color: _react.PropTypes.string,
      size: _react.PropTypes.number
    },
    enumerable: true
  }]);

  function IndeterminateCircularProgressIndicatorOSX(props) {
    var _this = this;

    _classCallCheck(this, IndeterminateCircularProgressIndicatorOSX);

    _get(Object.getPrototypeOf(IndeterminateCircularProgressIndicatorOSX.prototype), 'constructor', this).call(this);
    this.framerate = 60;
    this.duration = 1900;

    this.animateStep = function () {
      _this.currentStep++;
      if (_this.currentStep > _this.steps) {
        _this.currentStep = 1;
      }

      for (var i = 0, len = 12; i < len; ++i) {
        _this.refs[11 - i].style.opacity = _this.increment * _this.findStep(i);
      }
    };

    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  _createClass(IndeterminateCircularProgressIndicatorOSX, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animate();
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
    key: 'animate',
    value: function animate() {
      this.currentStep = 0;
      this.steps = this.duration / this.framerate;
      this.increment = 1 / this.steps;
      this.animateStep();
      this.interval = setInterval(this.animateStep, 1000 / this.framerate);
    }
  }, {
    key: 'findStep',
    value: function findStep(index) {
      var step = this.currentStep + this.steps / 12 * index;
      if (step > this.steps) {
        step = -this.steps + step;
      }
      return this.steps - step;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var color = _props.color;
      var size = _props.size;
      var style = _props.style;
      var absolute = _props.absolute;
      var visible = _props.visible;
      var display = _props.display;
      var form = _props.form;

      var props = _objectWithoutProperties(_props, ['color', 'size', 'style', 'absolute', 'visible', 'display', 'form']);

      var containerStyle = _extends({}, styles.container);
      var componentStyle = (0, _Styling.mergeStyles)(style, styles.progress, {
        visibility: this.state.visible ? 'visible' : 'hidden',
        display: this.state.display ? 'block' : 'none'
      });

      if (absolute) {
        componentStyle = (0, _Styling.mergeStyles)(componentStyle, styles.absolute);
      }

      var componentColor = color;
      if (!componentColor) {
        componentColor = '#000000';
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
          ref: 'element',
          x: '0px',
          y: '0px',
          viewBox: '0 0 32.3 32.3',
          style: componentStyle
        }, props),
        _react2['default'].createElement('path', {
          ref: '0',
          fill: componentColor,
          d: 'M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3 C17.7,8.7,17,9.4,16.1,9.4z'
        }),
        _react2['default'].createElement('path', {
          ref: '1',
          fill: componentColor,
          d: 'M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2 l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z'
        }),
        _react2['default'].createElement('path', {
          ref: '2',
          fill: componentColor,
          d: 'M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2 l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z'
        }),
        _react2['default'].createElement('path', {
          ref: '3',
          fill: componentColor,
          d: 'M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3 C23.5,17.7,22.8,17,22.8,16.1z'
        }),
        _react2['default'].createElement('path', {
          ref: '4',
          fill: componentColor,
          d: 'M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1 C21.8,21.2,21.5,20.2,22,19.4z'
        }),
        _react2['default'].createElement('path', {
          ref: '5',
          fill: componentColor,
          d: 'M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0 c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z'
        }),
        _react2['default'].createElement('path', {
          ref: '6',
          fill: componentColor,
          d: 'M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3 C14.6,23.5,15.3,22.8,16.2,22.8z'
        }),
        _react2['default'].createElement('path', {
          ref: '7',
          fill: componentColor,
          d: 'M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2 l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z'
        }),
        _react2['default'].createElement('path', {
          ref: '8',
          fill: componentColor,
          d: 'M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0 c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z'
        }),
        _react2['default'].createElement('path', {
          ref: '9',
          fill: componentColor,
          d: 'M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3 C8.7,14.6,9.4,15.3,9.4,16.2z'
        }),
        _react2['default'].createElement('path', {
          ref: '10',
          fill: componentColor,
          d: 'M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6 l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z'
        }),
        _react2['default'].createElement('path', {
          ref: '11',
          fill: componentColor,
          d: 'M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8 l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z'
        })
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
  }]);

  return IndeterminateCircularProgressIndicatorOSX;
})(_react.Component);

exports['default'] = IndeterminateCircularProgressIndicatorOSX;
module.exports = exports['default'];